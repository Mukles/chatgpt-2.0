import { Like, Unlike } from "../../icons/Icons";

interface Props {
  text?: any;
}

const ChatItem = ({ text }: Props) => {
  return (
    <div className="chat-wrapper gpt">
      <div className="chat">
        <div className="profile"></div>
        <div className="content">
          <p>Text {text}</p>
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
