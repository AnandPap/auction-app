import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { AuctionAppState, Toast, User } from "../types/auth";

const initialState: AuctionAppState = {
  auth: {
    user: null,
    token: null,
    isGuest: false,
  },
  toast: { text: "", show: false, type: undefined },
};

export const auctionappSlice = createSlice({
  name: "auctionapp",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: User; token: string }>) {
      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      state.auth.isGuest = false;
    },
    logout(state) {
      state.auth.user = null;
      state.auth.token = null;
      state.auth.isGuest = false;
    },
    continueAsGuest(state) {
      state.auth.user = null;
      state.auth.token = null;
      state.auth.isGuest = true;
    },
    setToast: (state, action: PayloadAction<Omit<Toast, "show">>) => {
      state.toast = { show: true, ...action.payload };
    },
    closeToast: (state) => {
      state.toast = {
        text: "",
        show: false,
        type: undefined,
      };
    },
  },
});

export const { login, logout, continueAsGuest, setToast, closeToast } = auctionappSlice.actions;

export const selectAuth = (state: RootState) => state.auctionapp.auth;
export const selectToast = (state: RootState) => state.auctionapp.toast;

export default auctionappSlice.reducer;
