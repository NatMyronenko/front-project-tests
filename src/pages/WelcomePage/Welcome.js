import { CustomButton, Section, SelectList } from 'components';
import React from 'react';
import languages from 'services/languages';
import { Box, Heading, Text } from '@chakra-ui/react';

export const Welcome = () => {
  return (
    <>
      <Section>
        <Box mx="auto" textAlign="center" mt="40px" mb="200px">
          <Heading
            fontWeight="600"
            fontSize="28px"
            lineHeight="34px"
            textAlign="center"
            mb="4"
            color="blue.400"
          >
            Welcome to the test board!
          </Heading>
          <Text
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            color="blue.900"
            mb="6"
          >
            Choose the test category you want to check your knowledge in.
          </Text>
          <Box mb="9">
            <Text
              fontWeight="400"
              fontSize="15px"
              lineHeight="18px"
              textAlign="center"
              color="#E0B346"
            >
              Hey, we're gonna add more test languages here soon!
            </Text>
            <Text
              fontWeight="400"
              fontSize="15px"
              lineHeight="18px"
              textAlign="center"
              color="#E0B346"
            >
              Now, we invite you to take Java and JavaScript tests.
            </Text>
          </Box>
          <SelectList languages={languages} />
        </Box>
      </Section>
    </>
  );
};
