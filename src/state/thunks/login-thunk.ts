import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../api/login";

export interface LoginFormState {
  userName: string;
  password: string;
}

interface LoginToken {
  token: string;
}

export const initLogin = createAsyncThunk<LoginToken, LoginFormState>(
  "login/user",
  async (payload) => {
    const response = await loginAPI(payload);
    return response.data;
  }
);
