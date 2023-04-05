import { configureStore } from '@reduxjs/toolkit';
import subMenuReducer from '@/features/submenu/submenuSlice';

const store = configureStore({
  reducer: {
    submenu: subMenuReducer,
  },
});

export default store;
