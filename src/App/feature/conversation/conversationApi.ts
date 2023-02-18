import { apiSlice } from "../apiSlice";

interface IMessage {
  prompt: string;
  model: string;
  temperature: number;
  chatId?: string;
  userId?: string;
}

interface IResponseMessage {
  _id?: "user" | "gpt";
  message: string;
  sender: string;
  createdAt?: string;
}

interface IUpdateMessage {
  _id: string;
  firstMessage?: string;
  newMessage: IResponseMessage;
  messages?: Array<IResponseMessage>;
}

interface IConversation {
  _id: string;
  firstMessage: string;
  userId: string;
}

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addMessage: build.mutation<IUpdateMessage, IMessage>({
      query: (data) => ({
        url: "/gpt/message",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(
        { userId, chatId, prompt },
        { dispatch, queryFulfilled }
      ) {
        dispatch(
          conversationApi.util.updateQueryData(
            "getMessages",
            chatId as string,
            (draftMessage: Array<IResponseMessage>) => {
              draftMessage.push({ sender: "user", message: prompt });
            }
          )
        );
        try {
          const result = await queryFulfilled;
          const { _id, firstMessage } = result.data || {};

          userId &&
            firstMessage &&
            dispatch(
              conversationApi.util.updateQueryData(
                "getConversation",
                userId as string,
                (draftConversations) => {
                  draftConversations.unshift({ _id, firstMessage, userId });
                }
              )
            );

          dispatch(
            conversationApi.util.updateQueryData(
              "getMessages",
              chatId as string,
              (draftMessage: Array<IResponseMessage>) => {
                draftMessage.push(result.data.newMessage);
              }
            )
          );
        } catch (error) {}
      },
    }),

    getConversation: build.query<Array<IConversation>, string>({
      query: (userId) => ({
        url: `/gpt/conversation/${userId}`,
        method: "GET",
      }),
    }),

    getMessages: build.query<any, string>({
      query: (chatId) => ({
        url: `/gpt/message/${chatId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddMessageMutation,
  useGetMessagesQuery,
  useGetConversationQuery,
} = conversationApi;
