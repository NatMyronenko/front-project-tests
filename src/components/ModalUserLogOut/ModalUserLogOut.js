import { Box } from '@chakra-ui/react';
import React, { useEffect, createRef } from 'react';
import { createPortal } from 'react-dom';
import css from './ModalUserLogOut.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

export const ModalUserLogOut = ({ onClose }) => {
  const modalRef = createRef();

  useEffect(() => {
    const handleKey = e => {
      if (e.code !== 'Escape') return;
      onClose(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (modalRef.current !== e.target) return;
    onClose(false);
  };

  return createPortal(
    <>
      <Box
        ref={modalRef}
        onClick={handleBackdropClick}
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        background="rgba(217, 217, 217, 0.69)"
        zIndex={1200}
      >
        <div className={css.Modal}>
          <h1>hello .i/m modal Window text</h1>
        </div>
      </Box>
    </>,

    MODAL_ROOT
  );
};
