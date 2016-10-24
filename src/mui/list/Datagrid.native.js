import React, { PropTypes, Component } from 'react';
import { ListView, View, Text } from 'react-native'

export class Datagrid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { resource, children, ids, data, currentSort, basePath, selectable, updateSort } = this.props;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const dataSource = ds.cloneWithRows(ids)
        return (
            <ListView
                dataSource={dataSource}
                renderRow={(id) => (<View>
                    {
                        React.Children.toArray(children).map(field => (
                            <field.type key={`${id}-${field.props.source}`} {...field.props} record={data[id]} basePath={basePath} resource={resource} />
                        ))
                    }
                </View>)}
                />
        )
    }
}

Datagrid.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.any).isRequired,
    resource: PropTypes.string,
    selectable: PropTypes.bool,
    data: PropTypes.object.isRequired,
    currentSort: PropTypes.shape({
        sort: PropTypes.string,
        order: PropTypes.string,
    }),
    basePath: PropTypes.string,
    updateSort: PropTypes.func,
};

Datagrid.defaultProps = {
    data: {},
    ids: [],
    selectable: true,
};

export default Datagrid;
