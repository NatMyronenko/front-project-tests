import { createSlice } from '@reduxjs/toolkit';
import {
  signUpUser,
  logInUser,
  fetchUser,
  logOutUser,
} from '../operations/operations';

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
    [logOutUser.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUser = state => state.user;
export const selectIsRefreshing = state => state.user.isRefreshing;
