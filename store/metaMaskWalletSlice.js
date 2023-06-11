import { createSlice } from "@reduxjs/toolkit";

const metaMaskWalletSlice = createSlice({
  name: "metamask",
  initialState: {
    privateKey: null,
    accountAddress: null,
  },
  reducers: {
    setAccountAddress: (state, action) => {
      state.accountAddress = action.payload;
    },
    setPrivateKey: (state, action) => {
      state.privateKey = action.payload;
    },
  },
});

export const { setAccountAddress, setPrivateKey } = metaMaskWalletSlice.actions;
export default metaMaskWalletSlice.reducer;
