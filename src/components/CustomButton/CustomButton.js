import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

export const CustomButton = ({
  children,
  disabled,
  type,
  mb,
  variant = 'blue',
  onClick = null,
}) => {
  const buttonTypes = {
    blue: {
      disabledColor: 'blue.100',
      bgColor: 'blue.400',
      hoverColor: 'blue.700',
      pressedBoxShadow: 'inset 4px 4px 4px rgba(49, 77, 147, 0.8)',
    },
    green: {
      disabledColor: 'green.100',
      bgColor: 'green.400',
      hoverColor: 'green.700',
      pressedBoxShadow: 'inset 4px 4px 4px #2E7E33',
    },
    pink: {
      disabledColor: '#CDD3CE',
      bgColor: 'pink.400',
      hoverColor: 'pink.700',
      pressedBoxShadow: 'inset 4px 4px 4px #2E7E33',
    },
    yellow: {
      disabledColor: 'yellow.100',
      bgColor: 'yellow.400',
      hoverColor: 'yellow.700',
      pressedBoxShadow: 'inset 4px 4px 4px #C19833',
    },
  };

  const { disabledColor, bgColor, hoverColor, pressedBoxShadow } =
    buttonTypes[variant] ?? buttonTypes.blue;

  return (
    <>
      <Button
        type={type}
        backgroundColor={bgColor}
        minW="113px"
        minH="45px"
        fontSize="20px"
        fontWeight="700"
        lineHeight="base"
        color="white"
        transition="background-color 0.3s ease-in-out"
        borderRadius="5px"
        boxShadow="3px 3px 4px rgba(137, 150, 183, 0.2)"
        isDisabled={disabled}
        mb={mb}
        onClick={onClick}
        _hover={{
          backgroundColor: hoverColor,
          boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
        }}
        _focus={{
          backgroundColor: hoverColor,
          boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
        }}
        _active={{
          backgroundColor: hoverColor,
          boxShadow: pressedBoxShadow,
        }}
        _disabled={{
          backgroundColor: disabledColor,
          pointerEvents: 'none',
        }}
      >
        {children}
      </Button>
    </>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(['blue', 'green', 'pink', 'yellow']),
};
