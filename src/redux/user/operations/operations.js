import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
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
      const response = await axios.post('/users/signup', user);
      token.set(response.data.token);
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

// ira.gricnko@gmail.com
