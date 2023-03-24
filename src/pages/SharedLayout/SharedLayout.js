import { Container, Logo } from 'components';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Box as="header" py="3.5vh">
        <Container>
          <Flex>
            <Logo />
            <Spacer />
          </Flex>
        </Container>
      </Box>
      <Outlet />
    </>
  );
};
