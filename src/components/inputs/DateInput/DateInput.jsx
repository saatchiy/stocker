import React from 'react';
import PropTypes from 'prop-types';

import './DateInput.scss';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
};

const defaultProps = {
  value: '',
  label: undefined,
};

const DateInput = props => {
  const { value, label, onChange, ...otherProps } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className="date-input-wrapper">
      {label && <div className="date-input__label">{label}</div>}
      <input
        className="date-input__input"
        type="date"
        onChange={handleChange}
        value={value}
        {...otherProps}
      />
    </div>
  );
};

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
