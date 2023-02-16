import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./userApi";

const user: Omit<IUser, "password"> = {
  _id: "",
  email: "",
  name: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(
    localStorage.getItem("user") ?? JSON.stringify(user)
  ) as IUser,

  reducers: {
    setUserDetails: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      return { ...payload };
    },
  },
});

export const { setUserDetails } = userSlice.actions;
