import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import ChatItem from "../Components/chat/chatItem";
import withAddNewMessage from "../HOC/withAddNewMessage";
interface Props {
  isAdding: boolean;
}
const Chat = ({ isAdding }: Props) => {
  const conversations = useSelector<RootState, any>(
    (state) => state.conversation
  );

  return (
    <>
      {conversations?.map((conversation: any, i: number) => {
        return <ChatItem key={i} messageText={conversation} />;
      })}

      {isAdding && (
        <ChatItem messageText={{ message: "Loading...", sender: "gpt" }} />
      )}
    </>
  );
};

export default withAddNewMessage(Chat);
