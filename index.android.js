import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect, Provider } from 'react-redux';
import dva from 'dva/mobile';

import { simpleRestClient, Admin, Resource } from './lib';
import { Datagrid } from './lib/mui/list/Datagrid';
import List from './lib/mui/list/List';
import TextField from './lib/mui/field/TextField';

import { Scene, Router as BaseRouter } from 'react-native-router-flux';
import { reducer as formReducer } from 'redux-form';

import adminReducer from './lib/reducer';
import item from './lib/item';

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

const resources = [{ name: 'patients', list: PostList }];
const Router = connect()(BaseRouter);
const app = dva();

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

app.use({
  extraReducers: {
    admin: adminReducer(resources),
    form: formReducer,
  }
})

app.model(item);

app.router(routes);

AppRegistry.registerComponent('adminonrest', () => app.start());
