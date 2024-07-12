import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './dataSlice';
import symbolReducer from './symbolSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    symbol: symbolReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;