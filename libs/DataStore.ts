import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";
import { CartReducer } from "./CartReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: { shopReducer, CartReducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
