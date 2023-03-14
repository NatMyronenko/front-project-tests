import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './CustomCheckbox.module.css';

export const CustomCheckbox = ({ id, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor={id} className={css.Checkbox_label}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={css.Checkbox_input}
      />
      <span className={css.Checkbox_checkmark}></span>
      <span className={css.Checkbox_labeltext}>{children}</span>
    </label>
  );
};

CustomCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
};
