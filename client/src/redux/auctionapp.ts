import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AuctionAppState {
  loggedIn: boolean;
}

const initialState: AuctionAppState = {
  loggedIn: false,
};

export const auctionappSlice = createSlice({
  name: "auctionapp",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = auctionappSlice.actions;

export const selectLoggedIn = (state: RootState) => state.auctionapp.loggedIn;

export default auctionappSlice.reducer;
