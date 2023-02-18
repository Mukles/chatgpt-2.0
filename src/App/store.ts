import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./feature/apiSlice";
import { conversationSlice } from "./feature/conversation/conversationSlice";
import { modelSlice } from "./feature/model/modelSlice";
import { userSlice } from "./feature/user/userSlice";

export const configStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [modelSlice.name]: modelSlice.reducer,
      [conversationSlice.name]: conversationSlice.reducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },

    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
      getDefaultMiddlewares().concat(apiSlice.middleware),
  });

export const store = configStore();
export type AppStore = ReturnType<typeof configStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
