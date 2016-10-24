import React, { PropTypes } from 'react';
import get from 'lodash.get';
import {
    Text
} from 'react-native';

const TextField = ({ source, record = {} }) => <Text>{get(record, source)}</Text>;

TextField.propTypes = {
    source: PropTypes.string.isRequired,
    record: PropTypes.object,
};

export default TextField;
