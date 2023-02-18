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
            chatId,
            (draftMessage: Array<IResponseMessage>) => {
              draftMessage.push({ sender: "user", message: prompt });
            }
          )
        );
        try {
          const result = await queryFulfilled;
          console.log({ result });
          /*if (chatId) {*/
          dispatch(
            conversationApi.util.updateQueryData(
              "getMessages",
              chatId,
              (draftMessage: Array<IResponseMessage>) => {
                draftMessage.push(result.data.newMessage);
              }
            )
          );
          /* }  else {
            const newMessage = result.data?.messages?.length
              ? result.data.messages[1]
              : { sender: "gpt", message: "something went wrong" };
            dispatch(add(newMessage));
          }*/
        } catch (error) {}
      },
    }),

    getConversation: build.query<any, any>({
      query: (userId) => ({
        url: `/gpt/conversation/${userId}`,
        method: "GET",
      }),
    }),

    getMessages: build.query<any, any>({
      query: (chatId) => ({
        url: `/gpt/message/${chatId ?? ""}`,
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
