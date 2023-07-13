import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filesDetails: [],
};

const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {
    storePdf: (state, action) => {
      console.log(action);
      state.filesDetails.push(action.payload);
    },
  },
});

export default pdfSlice.reducer;
export const { storePdf } = pdfSlice.actions;
