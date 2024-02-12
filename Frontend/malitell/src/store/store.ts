import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signupFocusReducer from './auth/signupFocusSlice';
import signupFormDataReducer from './auth/signupFormDataSlice';
import userReducer from "./auth/userSlice";
import boardTypeReducer from "./article/boardSlice";
import profileReducer from "./auth/profileSlice";
import { loadState } from "./localStorage";
const persistedState = loadState();


const rootReducer = combineReducers({
  signupFocus: signupFocusReducer,
  signupFormData: signupFormDataReducer,
  user: userReducer,
  board: boardTypeReducer,
  profile: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
