// src/store/modalSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'loginModal',
  initialState: { loginModalOpen: false },
  reducers: {
    flipLoginModal: (state) => {
      state.loginModalOpen = !state.loginModalOpen;
    },
  },
});

export const { flipLoginModal } = modalSlice.actions;

export default modalSlice.reducer;
