import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import cartReducer from '@/features/cart/cartSlice';
import subMenuReducer from '@/features/submenu/submenuSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [subMenuReducer],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  submenu: subMenuReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { persistor, store };
