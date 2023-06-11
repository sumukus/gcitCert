import { configureStore } from "@reduxjs/toolkit";
import metaMaskWalletReducer from "./metaMaskWalletSlice";

export const store = configureStore({
  reducer: {
    metaMaskWallet: metaMaskWalletReducer,
  },
});
