import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filesDetails: {},
};

const pdfSlice = createSlice({
  name: "pdf",
  initialState,
  reducers: {
    storePdf: (state, action) => {
      console.log(action);
      const { name, url } = action.payload;
      if (state.filesDetails[name]) {
        state.filesDetails[name].push(url);
      } else {
        state.filesDetails[name] = [url];
      }
      // state.filesDetails.push(action.payload);
    },
  },
});

export default pdfSlice.reducer;
export const { storePdf } = pdfSlice.actions;
