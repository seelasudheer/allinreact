import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  userName: "",
  usersData: [],
  isValidUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLogin(state, action) {
      state.userName = action.payload.userName;
      state.usersData = action.payload.usersData;
      state.isValidUser = true;
    },
    logOutUser(state) {
      state.userName = "";
      state.usersData = [];
      state.isValidUser = false;
    },
  },
});

export const { setAuthLogin, logOutUser } = authSlice.actions;
