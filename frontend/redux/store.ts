import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistStore";
import { loadState } from "./browserStorage";

const reducers = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
})

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
