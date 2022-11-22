import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types";

const initialState: { prod: IProduct; qty: number }[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ prod: action.payload, qty: 1 });
    },
    remove: (state, action) => {
      return state.filter((item) => item.prod.id !== action.payload);
    },
    increment: (state, action) => {
      return state.map((item) =>
        item.prod.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrement: (state, action) => {
      return state.map((item) =>
        item.prod.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
