import React from 'react';
import { createRoutesFromReactChildren } from 'react-router/lib/RouteUtils';
import { Text, View } from 'react-native';
import { Scene } from 'react-native-router-flux';

const CrudRoute = () => <Text>&lt;CrudRoute&gt; elements are for configuration only and should not be rendered</Text>;

CrudRoute.createRouteFromReactElement = (element, parentRoute) => {
    const { key, list, edit, create, remove, options } = element.props;
    // dynamically add crud routes
    const crudRoute = (
        <Scene key={key}>
            {list ? <Scene key="list" component={list} initial={true} /> : null}
            {create ? <Scene key="create" component={create} /> : null}
            {edit ? <Scene key=":id" component={edit} /> : null}
            {remove ? <Scene key=":id/delete" component={remove} /> : null}
        </Scene>);
    // higher-order component to pass path as resource to components
    crudRoute.component = ({ children }) => (
        <View>
            {React.Children.map(children, child => React.cloneElement(child, {
                resource: key,
                options,
                hasList: !!list,
                hasEdit: !!edit,
                hasCreate: !!create,
                hasDelete: !!remove,
            }))}
        </View>
    );
    return crudRoute;
};

export default CrudRoute;
