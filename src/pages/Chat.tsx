import ChatItem from "../Components/chat/chatItem";

const Chat = () => {
  return (
    <>
      {[...Array(20)].map((item, i: number) => {
        return <ChatItem key={i} text={i} i={i} />;
      })}
      {[...Array(20)].map((item, i) => {
        return <ChatItem key={i} text={i} i={i} />;
      })}
    </>
  );
};

export default Chat;
