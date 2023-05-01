import { Box, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, createRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/user/operations/operations';
import { IoMdAlert } from 'react-icons/io';
import { CustomButton } from 'components/CustomButton/CustomButton';

const MODAL_ROOT = document.querySelector('#modal-root');

export const ModalUserLogOut = ({ onClose }) => {
  const dispatch = useDispatch();
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
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        background="rgba(217, 217, 217, 0.69)"
        zIndex={1200}
        ref={modalRef}
        onClick={handleBackdropClick}
      >
        <Box
          position="absolute"
          minW="428px"
          backgroundColor="white"
          boxShadow="3px 3px 4px rgba(137, 150, 183, 0.2)"
          top="10.5%"
          right="2.5%"
          padding="14px"
          borderRadius="5px"
          _after={{
            content: '""',
            display: 'inline-block',
            position: 'absolute',
            bottom: '100%',
            right: '35px',
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderBottom: '10px solid white',
          }}
        >
          <Box
            border="1px dashed rgba(224, 114, 155, 0.9)"
            borderRadius="5px"
            padding="27px 54px"
          >
            <Text
              display="flex"
              alignItems="center"
              columnGap="8px"
              color="blue.900"
              lineHeight="1.29"
              mb="23px"
            >
              <IoMdAlert size={35} color="#E0729B" /> Are you sure you want to
              sign out?
            </Text>
            <Stack
              spacing={9}
              direction="row"
              align="center"
              justifyContent="center"
            >
              <CustomButton
                variant="pink"
                disabled={false}
                onClick={() => {
                  dispatch(logOutUser());
                }}
              >
                Sign Out
              </CustomButton>

              <CustomButton
                disabled={false}
                variant="green"
                onClick={() => {
                  onClose();
                }}
              >
                Cancel
              </CustomButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>,

    MODAL_ROOT
  );
};
