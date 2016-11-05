import React, { PropTypes } from 'react';
import title from '../../util/title';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const TextInput = ({ input, label, meta: { touched, error }, options, type, source }) => (
    <FormControl
        value={input.value}
        onChange={input.onChange}
        type={type}
        label={label}
        placeholder={label}
        {...options}
        />
);

TextInput.propTypes = {
    includesLabel: PropTypes.bool.isRequired,
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.object,
    source: PropTypes.string.isRequired,
    type: PropTypes.string,
    validation: PropTypes.object,
};

TextInput.defaultProps = {
    includesLabel: true,
    options: {},
    type: 'text',
};

export default TextInput;
