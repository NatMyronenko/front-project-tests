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
        boxShadow="3px 3px 4px rgba(137, 150, 183, 0.2)"
        isDisabled={disabled}
        mb={mb}
        _hover={{
          bg: 'blue.700',
          boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
        }}
        _focus={{
          bg: 'blue.700',
          boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
        }}
        _active={{
          bg: 'blue.700',
          boxShadow: 'inset 4px 4px 4px rgba(49, 77, 147, 0.8);',
        }}
        _disabled={{ bg: 'blue.100', pointerEvents: 'none' }}
      >
        {children}
      </Button>
    </>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
