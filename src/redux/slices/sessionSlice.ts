import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SessionState = {
  isAuthenticated: boolean;
};

const initialState: SessionState = {
  isAuthenticated: false
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { setAuthenticated } = sessionSlice.actions;
export default sessionSlice.reducer;
