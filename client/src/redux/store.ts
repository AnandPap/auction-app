import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auctionappReducer from "./auctionapp";

const rootReducer = combineReducers({
  auctionapp: auctionappReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function loadFromLocalStorage(): RootState | undefined {
  try {
    const serializedState = localStorage.getItem("reduxStore");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState) as RootState;
  } catch (err) {
    console.warn(err);
    return undefined;
  }
}

function saveToLocalStorage(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxStore", serializedState);
  } catch (e) {
    console.warn(e);
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type AppDispatch = typeof store.dispatch;
