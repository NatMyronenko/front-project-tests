import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://3.120.187.127:8080';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/v1/users', user);
      console.log(response);
      return response.data;
    } catch (error) {
      return console.log(rejectWithValue('Ooops'));
    }
  }
);

export const logInUser = createAsyncThunk(
  'user/logInUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/users/login`, user);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return console.log(rejectWithValue('Ooops'));
    }
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      const response = await axios.get(`/users/current`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/users/logout`);
      token.unset();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ira.gricnko@gmail.com
