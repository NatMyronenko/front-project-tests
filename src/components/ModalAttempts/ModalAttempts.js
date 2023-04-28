import React, { useEffect, createRef } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import {
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Icon,
  Button,
  Box,
} from '@chakra-ui/react';
import { RxCross2 } from 'react-icons/rx';
// import { PaginationState } from './Paginagtion';
// import { NavLink } from 'react-router-dom';

const RESULT_ROOT = document.querySelector('#result-root');

export const ModalAttempts = ({ onClose, option }) => {
  const modalRef = createRef();
  let count = 0;
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
  console.log(option);
  return createPortal(
    <div ref={modalRef} onClick={handleBackdropClick} className={css.Overlay}>
      <div className={css.Modal}>
        <Button
          onClick={onClose}
          position="absolute"
          top="15px"
          right="15px"
          width="14px"
          height="14px"
          bg="transparent"
          px="0"
          py="0"
          minW="14px"
        >
          <Icon
            as={RxCross2}
            color="blue.900"
            fill="currentColor"
            _hover={{ color: 'blue.700' }}
          />
        </Button>
        <Heading
          fontWeight="700"
          fontSize="16px"
          lineHeight="1.3"
          color="blue.400"
          mb="25px"
        >
          Previous {option.label} test results
        </Heading>
        <Box>
          <Box display="flex" justifyContent="space-between" px="40px">
            <Box
              color="blue.900"
              fontWeight="500"
              fontSize="14px"
              lineHeight="1.2"
              py="7px"
              textAlign="center"
              borderBottom="none"
              textTransform="capitalize"
            >
              Attempt
            </Box>
            <Box
              color="blue.900"
              fontWeight="500"
              fontSize="14px"
              lineHeight="1.2"
              py="7px"
              textAlign="center"
              borderBottom="none"
              textTransform="capitalize"
            >
              Date
            </Box>
            <Box
              color="blue.900"
              fontWeight="500"
              fontSize="14px"
              lineHeight="1.2"
              py="7px"
              textAlign="center"
              borderBottom="none"
              textTransform="capitalize"
            >
              Points
            </Box>
          </Box>
        </Box>
        <TableContainer maxH="50vh" overflowY="scroll" className={css.Scroll}>
          <Table variant="striped">
            <Tbody>
              {option.attempts.map(({ id, date, points, success }) => {
                count += 1;
                return (
                  <Tr key={id}>
                    <Td
                      color="blue.900"
                      fontWeight="300"
                      fontSize="14px"
                      lineHeight="1.2"
                      py="11px"
                      textAlign="center"
                      borderBottom="none"
                    >
                      {count}
                    </Td>
                    <Td
                      color="blue.900"
                      fontWeight="300"
                      fontSize="14px"
                      lineHeight="1.2"
                      py="11px"
                      textAlign="center"
                      borderBottom="none"
                    >
                      {date}
                    </Td>
                    <Td
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="1.2"
                      py="11px"
                      textAlign="center"
                      borderBottom="none"
                      color={success ? 'green.700' : 'pink.400'}
                    >
                      {points}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        {/* {option.attempts.length > 10 ? (
          <PaginationState attempts={option.attempts} />
        ) : null} */}
      </div>
    </div>,
    RESULT_ROOT
  );
};
