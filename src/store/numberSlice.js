import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayOfNums4: [],
  arrayOfNums3: [],
  arrayOfNums6: [],
  arrayOfNumsAll: [],
};

const isMulitpleOf = (num, x) => {
  if (num % x === 0) {
    return true;
  }

  if (x === "") {
    return true;
  }
  return false;
};

const numSlice = createSlice({
  name: "Number",
  initialState,
  reducers: {
    addRandomNum: (state, action) => {
      console.log(action);
      if (isMulitpleOf(action.payload, 3)) {
        state.arrayOfNums3.push(action.payload);
      } else if (isMulitpleOf(action.payload, 4)) {
        state.arrayOfNums4.push(action.payload);
      } else if (isMulitpleOf(action.payload, 6)) {
        state.arrayOfNums6.push(action.payload);
      } else {
        state.arrayOfNumsAll.push(action.payload);
      }
    },
  },
});

export default numSlice.reducer;
export const { addRandomNum } = numSlice.actions;
