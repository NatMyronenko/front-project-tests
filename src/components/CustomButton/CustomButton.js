import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

export const CustomButton = ({ children, disabled, type, mb }) => {
  return (
    <>
      <Button
        type={type}
        bg="blue.400"
        px="27px"
        py="11px"
        fontSize="20px"
        fontWeight="700"
        lineHeight="base"
        color="white"
        disabled={disabled}
        mb={mb}
      >
        {children}
      </Button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
