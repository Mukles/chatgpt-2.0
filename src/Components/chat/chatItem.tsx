import { Like, Unlike } from "../../icons/Icons";

interface Props {
  text?: any;
  i: number;
}

const ChatItem = ({ text, i }: Props) => {
  return (
    <div className={`chat-wrapper ${i % 2 === 0 ? "gpt" : ""}`}>
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
