import { createSlice } from "@reduxjs/toolkit";

interface IConversation {
  sender: string;
  message: string;
}

const conversations: Array<IConversation> = [];

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: conversations,
  reducers: {
    add: (state, { payload }) => {
      return [...state, payload];
    },
    clear: (state) => {
      return (state = []);
    },
  },
});

export const { add, clear } = conversationSlice.actions;
