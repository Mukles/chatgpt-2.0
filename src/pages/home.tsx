import ChatItem from "../Components/chat/chatItem";
import { Like, Unlike } from "../icons/Icons";

const Home = () => {
  return (
    <>
      {[...Array(20)].map((item, i) => {
        return <ChatItem key={i} text={i} />;
      })}
      <div className="chat-wrapper gpt">
        <div className="chat">
          <div className="profile"></div>
          <div className="content">
            <p>Text dfjadsjfkldasjfldsalfj asdjflas djflasjl</p>
          </div>

          <div className="icons">
            <button type="button">
              <Like />
            </button>
            <button type="button">
              <Unlike />
            </button>
          </div>
        </div>
      </div>
      {[...Array(20)].map((item, i) => {
        return <ChatItem key={i} text={i} />;
      })}
    </>
  );
};

export default Home;
