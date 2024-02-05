import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupFocusState } from "./authTypes";

const initialState: signupFocusState = {
  id: false,
  pw: false,
  pwCheck: false,
  email: false,
  name: false,
  gender: false,
  nickname: false,
  birthday: false,
  phone: false,
  career: false,
};

const signupFocusSlice = createSlice({
  name: "focus",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<boolean>) => {
      state.id = action.payload;
    },
    setPw: (state, action: PayloadAction<boolean>) => {
      state.pw = action.payload;
    },
    setPwCheck: (state, action: PayloadAction<boolean>) => {
      state.pwCheck = action.payload;
    },
    setEmail: (state, action: PayloadAction<boolean>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<boolean>) => {
      state.name = action.payload;
    },
    setGender: (state, action: PayloadAction<boolean>) => {
      state.gender = action.payload;
    },
    setNickname: (state, action: PayloadAction<boolean>) => {
      state.nickname = action.payload;
    },
    setBirthday: (state, action: PayloadAction<boolean>) => {
      state.birthday = action.payload;
    },
    setPhone: (state, action: PayloadAction<boolean>) => {
      state.phone = action.payload;
    },
    setCareer: (state, action: PayloadAction<boolean>) => {
      state.career = action.payload;
    },
  },
});

export const {
  setId,
  setPw,
  setPwCheck,
  setEmail,
  setName,
  setGender,
  setNickname,
  setBirthday,
  setPhone,
  setCareer,
} = signupFocusSlice.actions;

export default signupFocusSlice.reducer;
