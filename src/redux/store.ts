import { configureStore } from "@reduxjs/toolkit";
import session from "@/redux/slices/sessionSlice";
import modals from "@/redux/slices/modals/baseSlice";

export const store = configureStore({
  reducer: {
    session,
    modals
  }
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
