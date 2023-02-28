import React, { useState } from 'react';
import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

const Button = ({ textValue, colorType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        type="button"
        className={css.Button + ' ' + css[colorType]}
        onClick={handleModal}
      >
        {textValue}
      </button>
      {isOpen && <Modal onClose={handleModal} />}
    </>
  );
};

export default Button;

Button.propTypes = {
  textValue: PropTypes.string.isRequired,
  colorType: PropTypes.string.isRequired,
};

//const end = 20 && 'hello world';
//const start = false && 20;
//console.log(':>  start:', start);
//console.log(':>  end:', end);
