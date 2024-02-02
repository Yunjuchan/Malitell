import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupProcedure } from "./authTypes";

const initialState: signupProcedure = {
  certification: false,
}

const signupProcedureSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setCertification: (state, action: PayloadAction<boolean>) => {
      state.certification = action.payload;
    }
  }
})

export const {
  setCertification,
} = signupProcedureSlice.actions;

export default signupProcedureSlice.reducer;