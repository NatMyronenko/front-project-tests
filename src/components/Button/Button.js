import React, { useState } from 'react';
import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';
import { Modal, ButtonStyle } from 'components';

export const Button = ({ colorType, formType, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ButtonStyle
        type="button"
        className={css.Button + ' ' + css[colorType]}
        onClick={handleModal}
      >
        {children}
      </ButtonStyle>
      {isOpen && <Modal onClose={handleModal} formType={formType} />}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  colorType: PropTypes.string.isRequired,
};

//const end = 20 && 'hello world';
//const start = false && 20;
//console.log(':>  start:', start);
//console.log(':>  end:', end);
