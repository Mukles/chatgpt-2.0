import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../App/feature/conversation/conversationApi";
import { toggleAnimation } from "../App/feature/user/other";
import { RootState } from "../App/store";
import ChatItem from "../Components/chat/chatItem";
import Loader from "../helpers/Loader";
import withAddNewMessage from "../HOC/withAddNewMessage";

interface Props {
  isAdding: boolean;
  newMessageId: string;
}

const Home = ({ isAdding, newMessageId }: Props) => {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const { data: messageContainer, isLoading } = useGetMessagesQuery(
    chatId as string
  );
  const messagesList = messageContainer?.messages;
  const navTitle = document.querySelector(".nav-title");
  const isAnimate = useSelector<RootState, boolean>(
    (state) => state.other.isAnimateDone
  );

  useEffect(() => {
    if (!isAnimate) {
      dispatch(toggleAnimation());
    }
  }, [dispatch, chatId, isAnimate]);

  return (
    <>
      {isLoading ? (
        <div className="chat-list-loader">
          <Loader />
        </div>
      ) : (
        <>
          {navTitle &&
            createPortal(
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
