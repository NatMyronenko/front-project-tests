import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from './user/slice/slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // questions: questionSlice.reducer,
  },
});
