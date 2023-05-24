import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
};

export const darkModeslice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggle } = darkModeslice.actions;

export default darkModeslice.reducer;
