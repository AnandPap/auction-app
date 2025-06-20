import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AuctionAppState {
  loggedIn: boolean;
  guestEnter: boolean;
}

const initialState: AuctionAppState = {
  loggedIn: false,
  guestEnter: false,
};

export const auctionappSlice = createSlice({
  name: "auctionapp",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setGuestEnter: (state, action: PayloadAction<boolean>) => {
      state.guestEnter = action.payload;
    },
  },
});

export const { setLoggedIn, setGuestEnter } = auctionappSlice.actions;

export const selectLoggedIn = (state: RootState) => state.auctionapp.loggedIn;
export const selectGuestEnter = (state: RootState) => state.auctionapp.guestEnter;

export default auctionappSlice.reducer;
