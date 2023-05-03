import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  qty: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = cartSlice.actions;

export default cartSlice.reducer;
