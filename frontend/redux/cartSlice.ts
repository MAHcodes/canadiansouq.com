import { createSlice } from "@reduxjs/toolkit";

const initialState: {id: number, q: number}[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({id: action.payload, q: 1});
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
