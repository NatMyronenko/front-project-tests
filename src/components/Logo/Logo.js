import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from 'img/sprite.svg';
import { Icon, Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Icon width={10} height={10} color="blue.400" fill="currentColor">
        <use href={LogoSvg + '#icon-logo'}></use>
      </Icon>
      <Text fontSize="24px" lineHeight="1.37" fontWeight="700">
        <Text as="span" color="blue.900">
          IT
        </Text>
        <Text as="span" color="blue.400">
          e
        </Text>
        <Text as="span" color="red.400">
          s
        </Text>
        <Text as="span" color="blue.400">
          t
        </Text>
      </Text>
    </Link>
  );
};
