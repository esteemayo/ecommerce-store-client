import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: false,
};

export const darkModeslice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggle } = darkModeslice.actions;

export default darkModeslice.reducer;
