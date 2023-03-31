import { createSlice } from '@reduxjs/toolkit';
import { signUpUser, logInUser } from '../operations/operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  error: '',
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signUpUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUser = state => state.user;
