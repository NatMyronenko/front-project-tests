import { Flex, Text, Box } from '@chakra-ui/react';
import { Section, Metrics, SignUpForm, LoginForm } from 'components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [isOnLogin, setIsOnLogin] = useState(false);

  function handleOnLogin() {
    setIsOnLogin(!isOnLogin);
  }
  return (
    <Section>
      <Flex mx="auto" pos="relative" gap="35px" justify="center">
        <Flex flexDir="column" px="5" py="4" alignSelf="center">
          <Text
            as="h1"
            fontSize="40px"
            lineHeight="48px"
            mt="0"
            color="blue.900"
            mb="35px"
            maxW="35vw"
          >
            It’s time to
            <Text as="span" color="blue.400" mx="2.5">
              check
            </Text>
            <br />
            your
            <Text as="span" color="blue.400" mx="2.5">
              knowledge
            </Text>
            here!
          </Text>
          <Text
            as="p"
            fontSize="16px"
            lineHeight="1.37"
            color="black"
            maxW="33.5vw"
          >
            We made this platform with lots of
            <Text as="b" mx="3px">
              Javascript
            </Text>
            and
            <Text as="b" mx="3px">
              Java
            </Text>
            tests. You can easily check how much you know and prepare for a
            successful job interview.
          </Text>
          <Link
            to="/results"
            style={{
              backgroundColor: 'red',
            }}
          >
            {' '}
            go to results
          </Link>
        </Flex>

        {isOnLogin ? (
          <LoginForm isOnLogin={handleOnLogin} />
        ) : (
          <SignUpForm isOnLogin={handleOnLogin} />
        )}

        <Box
          w="6"
          h="6"
          rounded="full"
          pos="absolute"
          bg="#e0b346"
          top="-5vh"
          left="32vw"
        ></Box>
        <Box
          w="6"
          h="6"
          rounded="full"
          pos="absolute"
          bg="#51e05b"
          bottom="-4vh"
          left="10vw"
        ></Box>
        <Box
          w="6"
          h="6"
          rounded="full"
          pos="absolute"
          bg="#e0729b"
          bottom="-10vh"
          right="10vw"
        ></Box>
      </Flex>

      <Box>
        <Metrics />
      </Box>
      {/*{isOnLogin ? <Metrics /> : null}*/}
    </Section>
  );
};
