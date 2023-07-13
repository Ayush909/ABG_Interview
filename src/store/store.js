import { configureStore } from "@reduxjs/toolkit";
import FileReducer from "./fileSlice";

const store = configureStore({
  reducer: {
    file: FileReducer,
  },
});

export default store;
