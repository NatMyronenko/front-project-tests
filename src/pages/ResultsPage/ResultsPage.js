import { ButtonGroup, Stack, Text } from '@chakra-ui/react';
import { CustomButton, Section } from 'components';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/user/slice/slice';

const testScore = 55;
const percentCorrectAnswers = 80;

export const ResultsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

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
              color="green.400"
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
                color="green.400"
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
              You have passed the test <br /> and received {''}
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
        <ButtonGroup gap={'130px'} pt="58px">
          <CustomButton disabled={false}>Try again</CustomButton>
          <CustomButton disabled={false}>Finish</CustomButton>
        </ButtonGroup>
      </Stack>
    </Section>
  );
};
