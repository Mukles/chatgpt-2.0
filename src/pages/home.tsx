import ChatItem from "../Components/chat/chatItem";

const Home = () => {
  return (
    <>
      {[...Array(20)].map((item) => {
        return <ChatItem />;
      })}
    </>
  );
};

export default Home;
