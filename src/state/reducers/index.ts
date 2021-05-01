import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
export const rootReducer = combineReducers({
  login: loginReducer
});
