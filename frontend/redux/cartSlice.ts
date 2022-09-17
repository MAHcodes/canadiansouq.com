import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types";

const initialState: {prod: IProduct, qty: number}[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({prod: action.payload, qty: 1});
    },
    remove: (state, action) => {
      return state.filter((item) => item.prod.id !== action.payload);
    },
  }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
