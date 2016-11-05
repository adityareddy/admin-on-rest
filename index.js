import React, { PropTypes } from 'react';
import { reducer as formReducer } from 'redux-form';
import { connect, Provider } from 'react-redux';
import { Router, IndexRoute, Route, Redirect } from 'dva/router';
import { createRoutesFromReactChildren } from 'react-router/lib/RouteUtils';
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

import dva from 'dva';

import { simpleRestClient, Admin, Resource } from './lib';
import { Datagrid } from './lib/mui/list/Datagrid';
import List from './lib/mui/list/List';
import Create from './lib/mui/detail/Create';
import Edit from './lib/mui/detail/Edit';

import TextField from './lib/mui/field/TextField';
import TextInput from './lib/mui/input/TextInput';

import Layout from './lib/mui/layout/Layout';

import adminReducer from './lib/reducer';
import auth from './lib/auth';
import item from './lib/item';

import {LoginContainer} from './lib/components/Login';
import {App} from './lib/components/App';

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="title" />
                <TextField source="type" />
                <TextField source="by" />
                <TextField source="url" />
            </Datagrid>
        </List>
    )
};

export const PostCreate = (props) => (
    <Create
        {...props}
        validation={(values) => {
            const errors = {};
            ['title', 'teaser'].forEach(field => {
                if (!values[field]) {
                    errors[field] = ['Required field'];
                }
            });

            if (values.average_note < 0 || values.average_note > 5) {
                errors.average_note = ['Should be between 0 and 5'];
            }

            return errors;
        } }
        >
        <TextInput source="title" />
        <TextInput label="Password (if protected post)" source="password" type="password" />
        <TextInput source="teaser" options={{ multiLine: true }} />
        <TextInput source="average_note" />
    </Create>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <TextInput source="average_note" validation={{ min: 0 }} />
    </Edit>
);

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user, // how to get the user state
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})


const resources = [{ name: 'patients', list: PostList, create: PostCreate, edit: PostEdit }];
const routes = ({history}) => (
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="login" component={LoginContainer} />
            <IndexRoute component={UserIsAuthenticated(Layout)}>
                {resources.map(resource => (
                    <Route key={resource.name} path={resource.name}>
                        {resource.list ? <IndexRoute key="list" component={resource.list} /> : null}
                        {resource.create ? <Route path="create" key="create" component={resource.create} /> : null}
                        {resource.edit ? <Route path=":id" key="edit" component={resource.edit} /> : null}
                        {resource.remove ? <Route path=":id/delete" key="remove" component={resource.remove} /> : null}
                    </Route>)
                )}
            </IndexRoute>
        </Route>
    </Router>
);

app = dva()

app.use({
    extraReducers: {
        admin: adminReducer(resources),
        form: formReducer,
    }
})

app.model(auth);
app.model(item);

app.router(routes);

app.start('#root');