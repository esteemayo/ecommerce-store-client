import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '@/data';

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
    calcTotals: (state) => {
      let {
        total,
        qty,
        subtotal,
        tax,
      } = state.cart.reduce((cartTotal, cartItem) => {
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
        },
      );

      qty = parseFloat(qty.toFixed(2));
      tax = parseFloat(tax.toFixed(2));
      total = parseFloat(total.toFixed(2));
      subtotal = parseFloat(subtotal.toFixed(2));

      state.qty = qty;
      state.tax = tax;
      state.total = total;
      state.subtotal = subtotal;
    },
  },
});

export const {
  addProduct,
  calcTotals,
  clearCart,
  remove,
  reset,
  toggleQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
