import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./missionsSlice";

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
