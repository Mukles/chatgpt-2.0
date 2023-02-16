import { createSlice } from "@reduxjs/toolkit";

export interface IModel {
  model: string;
  temperature: number;
}

const modelInfo: IModel = {
  model: "davinci",
  temperature: 0.5,
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
