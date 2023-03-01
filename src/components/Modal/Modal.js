import React, { useEffect } from 'react';
import { createRef } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
//import { LoginForm } from '../LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';
import { SignUpForm } from '../SignUpForm/SignUpForm';

const MODAL_ROOT = document.querySelector('#modal-root');

export const Modal = ({ onClose }) => {
  const modalRef = createRef();

  useEffect(() => {
    const handleKey = e => {
      if (e.code !== 'Escape') return;
      onClose();
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (modalRef.current !== e.target) return;
    onClose();
  };

  return createPortal(
    <div ref={modalRef} onClick={handleBackdropClick} className={css.Overlay}>
      <div className={css.Login}>
        <div className="">
          <NavLink to="" className="">
            Login
          </NavLink>
          <NavLink to="" className="">
            Register
          </NavLink>
        </div>

        <SignUpForm />
      </div>
    </div>,
    MODAL_ROOT
  );
};
