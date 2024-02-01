import { configureStore } from "@reduxjs/toolkit";
import signupFocusReducer from './auth/signupFocusSlice';
export const store = configureStore({
  reducer: {
    // 사용하고 싶은 이름: import한 실제 slice
    signupFocus: signupFocusReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
