import { Button, Flex, Stack, Text, Icon, Box } from '@chakra-ui/react';
import { CustomButton, Section } from 'components';
import arrowSvg from 'img/sprite.svg';

const testScore = 60;
const percentCorrectAnswers = 80;

export const ResultsPage = () => {
  return (
    <Section>
      <Stack textAlign="center" pt="80px" spacing="30px" alignItems="center">
        <Text
          color="blue.400"
          fontWeight={700}
          fontSize="22px"
          lineHeight="26px"
        >
          Test finished!
        </Text>
        {testScore > percentCorrectAnswers ? (
          <>
            <Text
              color="green.700"
              fontWeight={700}
              fontSize="24px"
              lineHeight="29px"
            >
              Congratulaction!
            </Text>

            <Text
              color="blue.400"
              fontWeight={700}
              fontSize="20px"
              lineHeight="24px"
            >
              You have passed the test <br /> and received {''}
              <Text
                as="span"
                color="green.700"
                fontWeight={700}
                fontSize="30px"
                lineHeight="36px"
              >
                {' '}
                {testScore}{' '}
              </Text>
              points out of
              <Text
                as="span"
                fontWeight={700}
                fontSize="30px"
                lineHeight="36px"
              >
                {' '}
                100
              </Text>
            </Text>
            <Text color="blue.900" lineHeight="19px">
              80 points is the passing score,
              <br /> but you can improve your result any time.
            </Text>
          </>
        ) : (
          <>
            <Text
              color="pink.400"
              fontWeight={700}
              fontSize="24px"
              lineHeight="29px"
            >
              Unfortunately, you did not pass the test.
            </Text>

            <Text
              color="blue.400"
              fontWeight={700}
              fontSize="20px"
              lineHeight="24px"
            >
              You have received{''}
              <Text
                as="span"
                color="pink.400"
                fontWeight={700}
                fontSize="30px"
                lineHeight="36px"
              >
                {' '}
                {testScore}{' '}
              </Text>
              points out of
              <Text
                as="span"
                fontWeight={700}
                fontSize="30px"
                lineHeight="36px"
              >
                {' '}
                100
              </Text>
            </Text>
            <Text color="blue.900" lineHeight="19px">
              80 points is the passing score. <br /> Don’t worry, you can try
              again any time.
            </Text>
          </>
        )}

        <Flex pt="27px" gap="130px">
          <Box>
            <Icon
              mr="22px"
              width="66.5px"
              height="8px"
              viewBox="0 0 67 8"
              fill="blue.900"
              alignSelf="center"
              transform="rotate(180deg)"
            >
              <use href={arrowSvg + '#icon-bigArrow'}></use>
            </Icon>
            <Button
              bg="green.400"
              py="11px"
              minW="113px"
              minH="45px"
              fontSize="20px"
              fontWeight="700"
              lineHeight="base"
              color="white"
              borderRadius="5px"
              boxShadow="3px 3px 4px rgba(137, 150, 183, 0.2);"
              transition=" background-color .2s ease-in-out"
              _hover={{
                bg: 'green.700',
                boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
              }}
              _focus={{
                bg: 'green.700',
                boxShadow: ' 3px 3px 4px rgba(137, 150, 183, 0.2)',
              }}
              _active={{
                bg: 'green.700',
                boxShadow: 'inset 4px 4px 4px #2E7E33;',
              }}
            >
              Try again
            </Button>
          </Box>
          <Box>
            <CustomButton disabled={false}>Finish</CustomButton>
            <Icon
              ml="22px"
              width="66.5px"
              height="8px"
              viewBox="0 0 67 8"
              fill="blue.900"
              alignSelf="center"
            >
              <use href={arrowSvg + '#icon-bigArrow'}></use>
            </Icon>
          </Box>
        </Flex>
      </Stack>
    </Section>
  );
};
