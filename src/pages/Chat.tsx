import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import ChatItem from "../Components/chat/chatItem";
import withAddNewMessage from "../HOC/withAddNewMessage";
interface Props {
  isAdding: boolean;
  newMessageId: any;
}
const Chat = ({ isAdding, newMessageId }: Props) => {
  const conversations = useSelector<RootState, any>(
    (state) => state.conversation
  );

  return (
    <>
      {conversations?.map((conversation: any, i: number) => {
        return (
          <ChatItem
            key={i}
            newMessageId={newMessageId}
            messageText={conversation}
          />
        );
      })}

      {isAdding && (
        <ChatItem messageText={{ message: "Loading...", sender: "gpt" }} />
      )}
    </>
  );
};

export default withAddNewMessage(Chat);
