import { createSlice } from "@reduxjs/toolkit";

export const smartContractSlice = createSlice({
  name: "smartContract",
  initialState: {
    contract: null,
  },
  reducers: {
    loadSmartContract: (state, action) => {
      state.contract = action.payload;
    },
  },
});

export const { loadSmartContract } = smartContractSlice.actions;

export default smartContractSlice.reducer;
