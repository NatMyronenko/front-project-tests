import React from 'react';
import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ children, disabled }) => {
  return (
    <>
      <button
        className={css.Button + ' ' + css['button--blue']}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

//const end = 20 && 'hello world';
//const start = false && 20;
//console.log(':>  start:', start);
//console.log(':>  end:', end);
