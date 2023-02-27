import React from 'react';
import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ textValue, colorType }) => {
  return (
    <button type="button" className={css.Button + ' ' + css[colorType]}>
      {textValue}
    </button>
  );
};

export default Button;

Button.propTypes = {
  textValue: PropTypes.string.isRequired,
  colorType: PropTypes.string.isRequired,
};
