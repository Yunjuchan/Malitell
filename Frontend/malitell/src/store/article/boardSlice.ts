import { createSlice } from "@reduxjs/toolkit";

export interface boardState {
  boardType: string;
  q: string | null;
  tag: string | null;
}

const initialState: boardState = {
  boardType: "community",
  q: null,
  tag: "all",
};
export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoardTypeInfo: (state, action) => {
        // 보드 타입 변경
        // state.boardType를 free overcome gather중 하나로 변경 이것은 버튼마다 값이 달라짐"
        state.boardType = action.payload;
        state.q = null;
        state.tag = null;
    },

    setTagInfo: (state, action) => {
        
    },
    setQInfo: (state, action) => {},

    initBoardInfo: (state) => {
      state.boardType = "community";
      state.q = null;
      state.tag = "all";
    },
  },
});

export const { setBoardTypeInfo, setTagInfo, setQInfo ,initBoardInfo } = boardSlice.actions;

export default boardSlice.reducer;
