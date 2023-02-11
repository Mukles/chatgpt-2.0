import defaultProfile from "../../assets/default.jpg";
import { ChatGpt, Like, Unlike } from "../../icons/Icons";

interface Props {
  text?: any;
  i: number;
}

const ChatItem = ({ text, i }: Props) => {
  return (
    <div className={`chat-wrapper ${i % 2 === 0 ? "gpt" : ""}`}>
      <div className="chat">
        <div className="profile">
          {i % 2 === 0 ? <ChatGpt /> : <img src={defaultProfile} alt="" />}
        </div>
        <div className="content">
          <p>Text {text}</p>

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
    </div>
  );
};

export default ChatItem;
