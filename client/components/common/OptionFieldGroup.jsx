import React from 'react';
import PropTypes from 'prop-types';

function buildOptions(options){
  return options.map(op => {
    return (
      <option key={op.value + op.label}
        value={op.value}>{op.label}</option>
    );
  });
}

const OptionFieldGroup = ({name ,options, onChange, defaultOption}) => {
  return (
    <select className="option-field-group" name={name} onChange={onChange}>
      <option value="" selected>{defaultOption}</option>
      {buildOptions(options)}
    </select>
  );
};

OptionFieldGroup.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default OptionFieldGroup;