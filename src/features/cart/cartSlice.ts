import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '@/data';

const initialState = {
  cart: cartItems,
  wishlists: [],
  wished: [],
  qty: 0,
  tax: 0,
  total: 0,
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    reset: (state) => {
      state.cart = [];
      state.qty = 0;
      state.tax = 0;
      state.total = 0;
      state.subtotal = 0;
    },
    addProduct: (state, { payload }) => {
      if (state.wished.includes(payload.id)) {
        state.wishlists = state.wishlists.filter(
          (item) => item.id !== payload.id
        );
        state.wished = state.wished.filter((item) => item !== payload.id);
      } else {
        state.qty++;
        state.cart.push(payload);
        state.total += payload.price * payload.quantity;
      }
    },
    addWishlist: (state, { payload }) => {
      const inCart = state.cart.find((item) => item.id === payload.id);

      state.wishlists.push(payload);
      state.wished.push(payload.id);

      if (inCart) {
        state.cart = state.cart.filter((item) => item.id !== payload.id);
      }
    },
    removeWishlist: (state, { payload }) => {
      state.wishlists = state.wishlists.filter((item) => item.id !== payload);
      state.wished = state.wished.filter((item) => item !== payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    remove: (state, { payload }) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== payload);
    },
    toggleQuantity: (state, { payload }) => {
      state.cart = state.cart
        .map((cartItem) => {
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
    calcTotals: (state) => {
      let { total, qty, subtotal, tax } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.subtotal += itemTotal;
          cartTotal.qty += quantity;
          cartTotal.tax = cartTotal.subtotal * 0.07;
          cartTotal.total = cartTotal.subtotal + cartTotal.tax;
          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
          subtotal: 0,
          tax: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      qty = parseFloat(qty.toFixed(2));
      subtotal = parseFloat(subtotal.toFixed(2));
      tax = parseFloat(tax.toFixed(2));

      state.qty = qty;
      state.tax = tax;
      state.total = total;
      state.subtotal = subtotal;
    },
  },
});

export const {
  addProduct,
  addWishlist,
  calcTotals,
  clearCart,
  remove,
  removeWishlist,
  reset,
  toggleQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
