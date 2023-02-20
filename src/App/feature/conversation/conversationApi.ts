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

interface IGetMessages {
  _id: string;
  firstMessage: string;
  messages: Array<IResponseMessage>;
}

interface IConversation {
  _id: string;
  firstMessage: string;
  userId: string;
}

interface IDeleteConversation {
  conversationId: string;
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
            (draftMessage) => {
              draftMessage.messages.push({ sender: "user", message: prompt });
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
              (draftMessage) => {
                draftMessage.messages.push(result.data.newMessage);
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

    deleteConversation: build.mutation<any, IDeleteConversation>({
      query: ({ conversationId }) => ({
        method: "DELETE",
        url: `/gpt/conversation/${conversationId}`,
      }),
      async onQueryStarted(
        { userId, conversationId },
        { queryFulfilled, dispatch }
      ) {
        const patchResult = dispatch(
          conversationApi.util.updateQueryData(
            "getConversation",
            userId,
            (draftConversation) => {
              return draftConversation.filter(
                (conversation) => conversation._id !== conversationId
              );
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),

    clearConversation: build.mutation<any, string>({
      query: (userId) => ({
        method: "DELETE",
        url: `/gpt/clear/${userId}`,
      }),

      async onQueryStarted(userId, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          conversationApi.util.updateQueryData(
            "getConversation",
            userId,
            (draftConversation) => {
              return (draftConversation = []);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),

    getMessages: build.query<IGetMessages, string>({
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
  useDeleteConversationMutation,
  useClearConversationMutation,
} = conversationApi;
