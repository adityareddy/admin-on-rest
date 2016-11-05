import React, { PropTypes } from 'react';

export const Datagrid = ({ resource, children, ids, data, currentSort, basePath, selectable, updateSort }) => (
    <table>
        <tbody>
            {ids.map(id => (
                <tr key={id}>
                    {React.Children.toArray(children).map(field => (
                        <td key={`${id}-${field.props.source}`}>
                            <field.type {...field.props} record={data[id]} basePath={basePath} resource={resource} />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

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
