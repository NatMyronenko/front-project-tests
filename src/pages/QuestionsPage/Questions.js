import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Heading,
  List,
  ListItem,
  VStack,
  Text,
  Box,
  Icon,
} from '@chakra-ui/react';
import {
  resetQuiz,
  selectQuestions,
  selectScore,
  setScore,
} from 'redux/questions/slice/slice';
import arrowSvg from 'img/sprite.svg';
import { useNavigate } from 'react-router-dom';
import { CustomButton, Section } from 'components';
import { CustomInput } from 'components/CustomInput/CustomInput';

export const Questions = () => {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const questionsDB = useSelector(selectQuestions);
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    dispatch(resetQuiz());
  }, [dispatch]);

  useEffect(() => {
    setSelectedAnswers([]);
  }, [currentQuestionIndex]);

  const isMultipleCorrect =
    questionsDB[currentQuestionIndex].options.filter(
      ({ isCorrect }) => isCorrect
    ).length > 1;

  const isLastQuestion = currentQuestionIndex === questionsDB.length - 1;

  const handleAnswerClick = optionIndex => {
    if (isMultipleCorrect) {
      const updatedSelectedAnswers = selectedAnswers.includes(optionIndex)
        ? selectedAnswers.filter(index => index !== optionIndex)
        : [...selectedAnswers, optionIndex];
      setSelectedAnswers(updatedSelectedAnswers);
    } else {
      setSelectedAnswers([optionIndex]);
    }
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswers.every(
      el => questionsDB[currentQuestionIndex].options[el].isCorrect
    );
    if (isCorrect) {
      dispatch(setScore(score + 1));
    }
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    if (isLastQuestion) {
      navigate('/results');
    }
  };

  return (
    <Section>
      <Heading
        as="h1"
        pt="9px"
        textAlign="center"
        color="blue.400"
        fontWeight={400}
        fontSize="22px"
        mb="25px"
      >
        Welcome to the
        <Text as="span" fontWeight={700} px={1}>
          Java Core
        </Text>
        test!
      </Heading>
      <VStack
        spacing={'24px'}
        backgroundColor="#F4F4F4"
        minH="417px"
        maxWidth="68.5%"
        borderRadius="5px"
        padding="20px 30px"
        mx="auto"
        mb="20px"
      >
        <Heading
          as="h2"
          sx={{
            fontSize: '19px',
            color: 'blue.400',
            fontWeight: '400',
          }}
          _before={{
            content: '""',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            rounded: 'full',
            backgroundColor: 'rgba(224, 179, 70, 1)',
            mr: '8px',
          }}
        >
          Question
          <Text as="span" fontWeight="700" pl={2}>
            {currentQuestionIndex + 1}/ {questionsDB.length}
          </Text>
        </Heading>
        <Heading
          as="h2"
          fontWeight={600}
          lineHeight={1.2}
          fontSize="16px"
          textIndent="45px"
        >
          {questionsDB[currentQuestionIndex].question}
        </Heading>
        <List spacing={2}>
          {questionsDB[currentQuestionIndex].options.map(({ text }, index) => (
            <ListItem key={index} color="blue.600">
              {isMultipleCorrect ? (
                <CustomInput
                  type="checkbox"
                  label={text}
                  isChecked={selectedAnswers.includes(index)}
                  onChange={() => handleAnswerClick(index)}
                />
              ) : (
                <CustomInput
                  type="radio"
                  label={text}
                  isChecked={selectedAnswers.includes(index)}
                  onChange={() => handleAnswerClick(index)}
                />
              )}
            </ListItem>
          ))}
        </List>
      </VStack>
      <Box textAlign="right" maxWidth="68.5%" mx="auto" pb="100px">
        <CustomButton
          variant={isLastQuestion ? 'yellow' : 'green'}
          disabled={selectedAnswers.length === 0}
          onClick={handleNextQuestion}
        >
          {isLastQuestion ? 'See the result' : 'Next question'}
        </CustomButton>
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
    </Section>
  );
};
