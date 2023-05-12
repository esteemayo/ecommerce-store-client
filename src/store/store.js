import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


import cartReducer from '@/features/cart/cartSlice';
import subMenuReducer from '@/features/submenu/submenuSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    submenu: subMenuReducer,
  },
});

export default store;
