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
  const { data: messagesList, isLoading } = useGetMessagesQuery(
    chatId as string,
    {
      skip: !chatId,
    }
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {messagesList?.map((message: any, i: number) => {
            return <ChatItem key={i} messageText={message} />;
          })}
          {isAdding && (
            <ChatItem messageText={{ message: "Loading...", sender: "gpt" }} />
          )}
        </>
      )}
    </>
  );
};

export default withAddNewMessage(Home);
