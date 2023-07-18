import { configureStore } from "@reduxjs/toolkit";
import FileReducer from "./fileSlice";
import NumberReducer from "./numberSlice";

const store = configureStore({
  reducer: {
    file: FileReducer,
    number: NumberReducer,
  },
});

export default store;
