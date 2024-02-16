import { createSlice } from "@reduxjs/toolkit";

const signupFormDataSlice = createSlice({
  name: "signupFormData",
  initialState: {
    userId: "",
    email: "",
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUserId, setEmail } = signupFormDataSlice.actions;

export default signupFormDataSlice.reducer;
