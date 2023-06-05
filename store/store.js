import { configureStore } from "@reduxjs/toolkit";
import smartContractReducer from "./smartContractSlice";

export const store = configureStore({
  reducer: {
    smartContract: smartContractReducer,
  },
});
