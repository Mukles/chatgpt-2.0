import { createSlice } from "@reduxjs/toolkit";

export interface IModel {
  model: string;
  temperature: number;
}

const modelInfo: IModel = {
  model: "text-davinci-003",
  temperature: 0,
};

export const modelSlice = createSlice({
  name: "model",
  initialState: modelInfo,
  reducers: {
    setvalue: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { setvalue } = modelSlice.actions;
