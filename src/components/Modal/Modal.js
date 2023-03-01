import React, { useEffect, useState, createRef } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { LoginForm, SignUpForm } from 'components';
// import { NavLink } from 'react-router-dom';

const MODAL_ROOT = document.querySelector('#modal-root');
const FORM_TYPES = {
  loginForm: 'form-login',
  signUpForm: 'form-signup',
};

export const Modal = ({ onClose, formType }) => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const modalRef = createRef();

  useEffect(() => {
    if (formType === FORM_TYPES.loginForm) setIsLoginFormOpen(true);
    if (formType === FORM_TYPES.signUpForm) setIsSignUpFormOpen(true);
  }, [formType]);

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
      <div className={css.Modal}>
        {/* <NavLink to="" className="">
            Login
          </NavLink>
          <NavLink to="" className="">
            Register
          </NavLink> */}

        {isLoginFormOpen && <LoginForm />}
        {isSignUpFormOpen && <SignUpForm />}
      </div>
    </div>,
    MODAL_ROOT
  );
};
