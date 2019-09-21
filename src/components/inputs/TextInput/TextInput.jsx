import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.scss';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
};

const defaultProps = {
  value: '',
  label: undefined,
};

const TextInput = props => {
  const { value, label, onChange, ...otherProps } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className="text-input-wrapper">
      {label && <div className="text-input__label">{label}</div>}
      <input
        className="text-input__input"
        type="text"
        onChange={handleChange}
        value={value}
        {...otherProps}
      />
    </div>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
