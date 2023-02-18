import defaultProfile from "../../assets/default.jpg";
import { ChatGpt, Like, Unlike } from "../../icons/Icons";

interface IMessage {
  sender: string;
  message: string;
  _id?: string;
}

interface Props {
  messageText: IMessage;
}

const ChatItem = ({ messageText }: Props) => {
  const { message, sender } = messageText;
  const isGpt = sender === "gpt";

  return (
    <div className={`chat-wrapper ${isGpt ? "gpt" : ""}`}>
      <div className="chat">
        <div className="profile">
          {isGpt ? <ChatGpt /> : <img src={defaultProfile} alt="" />}
        </div>
        <div className="content">
          <p>{message}</p>

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
