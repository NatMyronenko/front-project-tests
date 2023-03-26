import React, { useRef } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  PopoverArrow,
  //Tooltip,
} from '@chakra-ui/react';

export const CustomTooltip = ({ children, textTooltip }) => {
  const initRef = useRef();
  return (
    <Popover
      closeOnBlur={true}
      initialFocusRef={initRef}
      placement="left-start"
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        bg="#FFF5DE"
        color="blue.900"
        boxShadow="3px 3px 4px rgba(137, 150, 183, 0.2)"
        borderRadius="5"
        textAlign="center"
        outline="none"
        border="none"
        pos="absolute"
        top={0}
        left={0}
        px={3}
        py={1}
      >
        <PopoverArrow bg="#FFF5DE" />
        <PopoverBody>{textTooltip}</PopoverBody>
      </PopoverContent>
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
