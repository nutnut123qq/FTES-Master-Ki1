import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
  signIn: boolean;
};

const initialState: ModalsState = {
  signIn: false
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setSignInModal(state, action: PayloadAction<boolean>) {
      state.signIn = action.payload;
    }
  }
});

export const { setSignInModal } = modalsSlice.actions;
export default modalsSlice.reducer;
