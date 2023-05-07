import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Heading,
  List,
  ListItem,
  Checkbox,
  Radio,
  VStack,
} from '@chakra-ui/react';
import {
  resetQuiz,
  selectQuestions,
  selectScore,
  setScore,
} from 'redux/questions/slice/slice';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from 'components';

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
    <VStack spacing={4}>
      <Heading as="h1">
        Question {currentQuestionIndex + 1}/ {questionsDB.length}
      </Heading>
      <Heading as="h2">{questionsDB[currentQuestionIndex].question}</Heading>
      <List spacing={2}>
        {questionsDB[currentQuestionIndex].options.map(({ text }, index) => (
          <ListItem key={index}>
            <label>
              {isMultipleCorrect ? (
                <Checkbox
                  isChecked={selectedAnswers.includes(index)}
                  onChange={() => handleAnswerClick(index)}
                >
                  {text}
                </Checkbox>
              ) : (
                <Radio
                  isChecked={selectedAnswers.includes(index)}
                  onChange={() => handleAnswerClick(index)}
                  value={index}
                  name="answer"
                >
                  {text}
                </Radio>
              )}
            </label>
          </ListItem>
        ))}
      </List>
      <CustomButton
        variant="yellow"
        disabled={selectedAnswers.length === 0}
        onClick={handleNextQuestion}
      >
        {isLastQuestion ? 'See the result' : 'Next question'}
      </CustomButton>
    </VStack>
  );
};
