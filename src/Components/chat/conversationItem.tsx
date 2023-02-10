import { Link } from "react-router-dom";
import { Chat, Delete, Edit } from "../../icons/Icons";

interface Props {
  isActive?: boolean;
  children?: any;
  text?: string;
}

const ConversationItem = ({ isActive, children, text }: Props) => {
  return (
    <li>
      <Link to={"/"} className={`single-chat ${isActive ? "active" : ""}`}>
        <p>
          {children ?? <Chat />}
          <span>{text || "Hello from response"}</span>
        </p>

        {isActive && (
          <div>
            <button>
              <Edit />
            </button>
            <button>
              <Delete />
            </button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default ConversationItem;
