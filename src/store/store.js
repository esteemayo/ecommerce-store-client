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

import cartReducer from '@/features/cart/cartSlice';
import subMenuReducer from '@/features/submenu/submenuSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = {
  cart: cartReducer,
  submenu: subMenuReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

let persistor = persistStore(store)

export { persistor, store };
