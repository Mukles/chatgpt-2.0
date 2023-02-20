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
}

const Home = ({ isAdding }: Props) => {
  const { chatId } = useParams();
  const { data: messageContainer, isLoading } = useGetMessagesQuery(
    chatId as string
  );
  const messagesList = messageContainer?.messages;
  const navTitle = document.querySelector(".nav-title");

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
        <AnimatePresence initial={false}>
          {navTitle &&
            createPortal(
              messageContainer?.firstMessage,
              document.querySelector(".nav-title") as HTMLElement
            )}
          {messagesList?.map((message: any, i: number) => {
            return <ChatItem key={i} messageText={message} />;
          })}
          {isAdding && (
            <ChatItem messageText={{ message: "Loading...", sender: "gpt" }} />
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default withAddNewMessage(Home);
