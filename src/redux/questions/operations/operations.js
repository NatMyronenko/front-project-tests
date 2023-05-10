import { createAsyncThunk } from '@reduxjs/toolkit';
import questions from 'services/questionList';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = questions;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
