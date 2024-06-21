import { configureStore } from "@reduxjs/toolkit";
import { binanceReducer } from "./Feature/BinanceSlice";
import thunk from 'redux-thunk';
import { SelectReducer } from "./Feature/SelectSlice";
export const store = configureStore({
  reducer: {
    binance: binanceReducer,
    Select : SelectReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    //   serializableCheck: {
    //     warnAfter: 128, 
    //   },
    serializableCheck: false, 

    }),
});
