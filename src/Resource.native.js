import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const componentPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);

const Resource = () => <Text>&lt;Resource&gt; elements are for configuration only and should not be rendered</Text>;

Resource.propTypes = {
    name: PropTypes.string.isRequired,
    list: componentPropType,
    edit: componentPropType,
    create: componentPropType,
    remove: componentPropType,
    icon: componentPropType,
    options: PropTypes.object,
};

Resource.defaultProps = {
    options: {},
};

export default Resource;
