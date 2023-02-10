import { Like, Unlike } from "../../icons/Icons";

const ChatItem = () => {
  return (
    <div className="chat-wrapper gpt">
      <div className="chat">
        <div className="profile"></div>
        <div className="content">
          <p>I'm sorry, I don't understand what you mean by "fsad". Can you</p>
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
  );
};

export default ChatItem;
