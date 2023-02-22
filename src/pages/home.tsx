import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../App/feature/conversation/conversationApi";
import ChatItem from "../Components/chat/chatItem";
import Loader from "../helpers/Loader";
import withAddNewMessage from "../HOC/withAddNewMessage";

interface Props {
  isAdding: boolean;
  newMessageId: string;
}

const Home = ({ isAdding, newMessageId }: Props) => {
  const { chatId } = useParams();
  const { data: messageContainer, isLoading } = useGetMessagesQuery(
    chatId as string
  );
  const messagesList = messageContainer?.messages;
  const navTitle = document.querySelector(".nav-title");

  console.log(navTitle);

  console.log(messageContainer);

  useEffect(() => {
    const wrapper = document.querySelector(
      "main > div:first-child"
    ) as HTMLElement;

    wrapper.scrollTop = wrapper.scrollHeight + 120;
  }, [isAdding]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {createPortal(
            messageContainer?.firstMessage,
            navTitle as HTMLElement
          )}
          <AnimatePresence initial={false}>
            {messagesList?.map((message, i: number) => {
              return (
                <ChatItem
                  key={i}
                  newMessageId={newMessageId}
                  messageText={message}
                />
              );
            })}
            {isAdding && (
              <ChatItem
                messageText={{ message: "Loading...", sender: "gpt" }}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default withAddNewMessage(Home);
