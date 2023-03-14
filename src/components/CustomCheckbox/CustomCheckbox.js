import React, { useState } from 'react';
import css from './CustomCheckbox.module.css';

export const CustomCheckbox = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label htmlFor="checkbox" className={css.checkbox_label}>
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={css.checkbox_input}
      />
      <span className={css.checkbox_checkmark}></span>
      {children}
    </label>
  );
};
