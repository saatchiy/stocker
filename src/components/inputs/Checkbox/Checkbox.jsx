import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.object.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  label: undefined,
};

const Checkbox = props => {
  const { items, label, onChange } = props;

  const handleChange = event => {
    onChange(event.target.id, event.target.checked);
  };

  return (
    <div className="checkbox-wrapper">
      {label && <div className="checkbox-input__label">{label}</div>}
      {Object.keys(items).map(item => (
        <div className="checkbox-content" key={items[item].key}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="checkbox-label">
            {items[item].label}
            <input
              className="checkbox-input"
              type="checkbox"
              id={items[item].key}
              onChange={handleChange}
            />
            <span className="custom-checkbox" />
          </label>
        </div>
      ))}
    </div>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
