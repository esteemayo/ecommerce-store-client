import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '@/data';

const initialState = {
  cart: cartItems,
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
    clearCart: (state) => {
      state.cart = [];
    },
    remove: (state, { payload }) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== payload);
    },
    toggleQuantity: (state, { payload }) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id === payload.id) {
          if (payload.type === 'inc') {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }

          if (payload.type === 'dec') {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
        }
        return cartItem;
      })
        .filter((cartItem) => cartItem.quantity !== 0);
    },
  },
});

export const { addProduct, clearCart, remove, reset, toggleQuantity } = cartSlice.actions;

export default cartSlice.reducer;
