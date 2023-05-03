import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  qty: 0,
  tax: 0,
  total: 0,
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => initialState,
    addProduct: (state, { payload }) => {
      state.qty++;
      state.cart.push(payload);
      state.total += payload.price * payload.quantity;
    },
    remove: (state, { payload }) => {
      state.cart.filter((item) => item.id !== payload);
    },
  },
});

export const { addProduct, remove, reset } = cartSlice.actions;

export default cartSlice.reducer;
