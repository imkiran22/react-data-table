import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initLogin } from "../thunks/login-thunk";

interface LoginToken {
  token: string;
}

const initialState: LoginToken = {
  token: ""
};

console.log(initLogin.fulfilled);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initLogin.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("authenticated", "YES");
      state.token = payload.token;
    });
    builder.addCase(initLogin.rejected, (state, { payload }) => {
      console.error("LOGIN FAILURE", state, payload);
    });
    builder.addCase(initLogin.pending, (state, { payload }) => {
      console.info("LOGIN PENDING");
    });
  }
});

// export const { loginSuccess } = loginSlice.actions
export default loginSlice.reducer;
