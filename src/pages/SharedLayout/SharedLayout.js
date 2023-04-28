import { Container, Logo } from 'components';
import { selectIsLoggedIn } from 'redux/user/slice/slice';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
//import { AuthNav } from 'components/AuthNav/AuthNav';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Box as="header" py="3.5vh">
        <Container>
          <Flex>
            <Logo />
            <Spacer />
            {/*{isLoggedIn ? <UserMenu /> : <AuthNav />}*/}
            {isLoggedIn && <UserMenu />}
          </Flex>
        </Container>
      </Box>
      <Outlet />
    </>
  );
};
