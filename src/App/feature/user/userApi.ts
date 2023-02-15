import { apiSlice } from "../apiSlice";
import { setUserDetails } from "./userSlice";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
}

interface ILogin {
  email: string;
  password: string;
}

const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<
      Omit<IUser, "password">,
      Omit<IUser, "token" | "_id">
    >({
      query: (data) => ({
        method: "POST",
        url: "/user/register",
        body: data,
      }),

      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data._id) {
            dispatch(setUserDetails(result.data));
          }
        } catch (error) {}
      },
    }),

    login: build.mutation<Omit<IUser, "password">, ILogin>({
      query: (data) => ({
        method: "POST",
        url: "/user/login",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data._id) {
            dispatch(setUserDetails(result.data));
          }
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = userApi;
