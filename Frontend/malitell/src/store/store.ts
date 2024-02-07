import { configureStore } from "@reduxjs/toolkit";
import signupFocusReducer from './auth/signupFocusSlice';
import signupFormDataReducer from './auth/signupFormDataSlice';
import userReducer from "./auth/userSlice";

export const store = configureStore({
  reducer: {
    // 사용하고 싶은 이름: import한 실제 slice
    signupFocus: signupFocusReducer,
    signupFormData: signupFormDataReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
