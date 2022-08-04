import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authReducer from './redux/auth';

const persistConfigAuth = {
  key: 'auth',
  storage,
};

const store = configureStore({
  reducer: {
    // auth: authReducer, tanpa persist
    auth: persistReducer(persistConfigAuth, authReducer), // untuk persistant state di authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
