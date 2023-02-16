import { apiSlice } from "../apiSlice";

interface IMessage {
  prompt: string;
  model: string;
  temperature: number;
  chatId?: string;
  userId: string;
}

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addMessage: build.mutation<any, IMessage>({
      query: (data) => ({
        url: "/gpt/message",
        method: "POST",
        body: data,
      }),
    }),
    getMessages: build.query<any, any>({
      query: (userId) => ({
        url: `/gpt/messages/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddMessageMutation, useGetMessagesQuery } = conversationApi;
