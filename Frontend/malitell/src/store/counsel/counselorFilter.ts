import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounselorFilterState = {
  name: string;
  gender: string[];
  professionalField: string[];
};

const initialState: CounselorFilterState = {
  name: '',
  gender: [],
  professionalField: [],
};

const counselorFilterSlice = createSlice({
  name: 'counselorFilter',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setGender: (state, action: PayloadAction<string[]>) => {
      state.gender = action.payload;
    },
    setProfessionalField: (state, action: PayloadAction<string[]>) => {
      state.professionalField = action.payload;
    },
  },
});

export const { setName, setGender, setProfessionalField } = counselorFilterSlice.actions;

export default counselorFilterSlice.reducer;
