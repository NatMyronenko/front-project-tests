import React from 'react';
import PropTypes from 'prop-types';
import css from './CustomCheckbox.module.css';
import checkSvg from 'img/sprite.svg';

export const CustomCheckbox = ({ id, children, onChange, isChecked }) => {
  return (
    <label htmlFor={id} className={css.Checkbox_label}>
      <input
        id={id}
        type="checkbox"
        defaultChecked={isChecked}
        onChange={onChange}
        className={css.Checkbox_input}
      />
      <span className={css.Checkbox_checkmark}>
        {isChecked && (
          <svg width={14} height={12} className={css.Check_svg}>
            <use href={checkSvg + '#icon-check'}></use>
          </svg>
        )}
      </span>
      <span className={css.Checkbox_labeltext}>{children}</span>
    </label>
  );
};

CustomCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
};
