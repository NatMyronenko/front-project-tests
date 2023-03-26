import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  PopoverArrow,
  Portal,

  //Tooltip,
} from '@chakra-ui/react';

export const CustomTooltip = ({ children, textTooltip }) => {
  return (
    <Popover
      isLazy
      closeOnBlur={true}
      placement={'top'}
      arrowPadding={250}
      arrowSize={15}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent
          bg="#FFF5DE"
          color="blue.900"
          boxShadow="3px 3px 4px rgba(137, 150, 183, 0.2)"
          borderRadius="5"
          textAlign="center"
          maxW={273}
          border="none"
          pos="absolute"
          bottom="1"
          right="-4"
          _focus={{ boxShadow: '3px 3px 4px rgba(137, 150, 183, 0.2)' }}
        >
          <PopoverArrow bg="#FFF5DE" left={1000} />
          <PopoverBody py={1} px={3} fontSize="14">
            {textTooltip}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
    //<Tooltip
    //  label={textTooltip}
    //  placement="top-end"
    //  hasArrow
    //  bg="#FFF5DE"
    //  color="blue.900"
    //  boxShadow="3px 3px 4px rgba(137, 150, 183,
    //  0.2)"
    //  borderRadius="5"
    //  textAlign="center"
    //  pos="absolute"
    //  bottom="1"
    //  left="13"
    //  w="100%"
    //  //maxW="270"
    //  px={3}
    //  py={1}
    //  arrowSize={14}
    //  arrowPadding={17}
    //>
    //  {children}
    //</Tooltip>
  );
};
