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
    addProduct: (state, { payload }) => {
      state.cart.push(payload);
      state.qty += 1;
      state.total += payload.price * payload.quantity;
    },
  },
});

export const { reset } = cartSlice.actions;

export default cartSlice.reducer;
