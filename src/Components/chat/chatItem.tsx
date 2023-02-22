import { useSelector } from "react-redux";
import { RootState } from "../../App/store";
import defaultProfile from "../../assets/default.jpg";
import AnimatedText from "../../helpers/Animated-text";
import { ChatGpt, Like, Unlike } from "../../icons/Icons";

interface IMessage {
  sender: string;
  message: string;
  _id?: string;
}

interface Props {
  messageText: IMessage;
  newMessageId?: string;
}

const ChatItem = ({ messageText, newMessageId }: Props) => {
  let image = useSelector<RootState, string | undefined>(
    (state) => state.user.image
  );
  const { message, sender } = messageText;
  const isGpt = sender === "gpt";
  const profile = image
    ? process.env.REACT_APP_API_URI + "/" + image
    : defaultProfile;

  return (
    <div className={`chat-wrapper ${isGpt ? "gpt" : ""}`}>
      <div className="chat">
        <div className="profile">
          {isGpt ? <ChatGpt /> : <img src={profile} alt="" />}
        </div>
        <div className="content">
          {newMessageId && newMessageId === messageText._id && isGpt ? (
            <AnimatedText text={message} />
          ) : (
            <p>{message}</p>
          )}

          {isGpt && (
            <div className="icons">
              <button type="button">
                <Like />
              </button>
              <button type="button">
                <Unlike />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
