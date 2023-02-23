import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUserDetails } from "./user/userSlice";

const baseQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: process.env.REACT_APP_API_URI + "/api",
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState).user.token;
    if (token) {
      headers.set("Authorization", `bearer ${token}`);
    }
    return headers;
  },
});

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery:  async () =>{},

//   endpoints: (builder) => ({}),
// });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 403) {
      localStorage.removeItem("user");
      api.dispatch(setUserDetails({}));
    }
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
