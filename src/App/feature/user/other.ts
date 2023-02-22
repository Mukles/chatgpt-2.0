import { createSlice } from "@reduxjs/toolkit";

export const otherSlice = createSlice({
  name: "other",
  initialState: { isAnimateDone: true },
  reducers: {
    toggleAnimation: (state) => {
      state.isAnimateDone = !state.isAnimateDone;
    },
  },
});

export const { toggleAnimation } = otherSlice.actions;
