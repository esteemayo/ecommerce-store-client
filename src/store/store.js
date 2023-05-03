import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/cartSlice';
import subMenuReducer from '@/features/submenu/submenuSlice';

const store = configureStore({
  reducer: {
    submenu: subMenuReducer,
  },
});

export default store;
