import React, { PropTypes } from 'react';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { Scene, Router as BaseRouter } from 'react-native-router-flux';

import adminReducer from './reducer';
import crudSaga from './sideEffect/saga';
import CrudRoute from './CrudRoute';
import Layout from './mui/layout/Layout';
import withProps from './withProps';

import { Datagrid } from './mui/list/Datagrid';
import { TextField } from './mui/field/TextField';
import { Text } from 'react-native';
import dva from 'dva/mobile';

const routes = () => (
    <Router>
        <Scene key="root" resources={resources}>
            {resources.map(resource =>
                <Scene key={resource.name}>
                    {resource.list ? <Scene key="list" component={resource.list} initial={true} /> : null}
                    {resource.create ? <Scene key="create" component={resource.create} /> : null}
                    {resource.edit ? <Scene key="edit" component={resource.edit} /> : null}
                    {resource.remove ? <Scene key="remove" component={resource.remove} /> : null}
                </Scene>
            )}
        </Scene>
    </Router>
)

const Admin = () => {
    const resources = React.Children.map(children, ({ props }) => props);
    const Router = connect()(BaseRouter);
    const app = dva();

    app.use({
        extraReducers: {
            admin: adminReducer(resources),
            form: formReducer,
        }
    })

    app.model({
        namespace: 'count',
        state: 0,
        reducers: {
            add(state) { return state + 1; },
            minus(state) { return state - 1; },
        },
        effects: {
            *addDelay(action, { call, put }) {
                yield call(delay, 1000);
                yield put({ type: 'add' });
            },
        },
        subscriptions: {
        },
    });

    app.router(routes);
    const elem = app.start();
};