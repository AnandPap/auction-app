import { configureStore } from "@reduxjs/toolkit";
import auctionappReducer from "./auctionapp";

export const store = configureStore({
  reducer: {
    auctionapp: auctionappReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
