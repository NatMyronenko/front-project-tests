import { createSlice } from '@reduxjs/toolkit';
import questionsDB from 'services/questionList';

const initialState = {
  questions: questionsDB,

  score: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setScore(state, action) {
      state.score = action.payload;
    },

    resetQuiz(state) {
      state.score = 0;
    },
  },
});

export const { setScore, resetQuiz } = quizSlice.actions;
export const selectScore = state => state.questions.score;
export const selectQuestions = state => state.questions.questions;
