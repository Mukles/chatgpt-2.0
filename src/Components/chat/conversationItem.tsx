import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserDetails } from "../../App/feature/user/userSlice";
import { Chat, Delete, Edit } from "../../icons/Icons";

interface Props {
  isActive?: boolean;
  children?: any;
  text?: string;
}

const ConversationItem = ({ isActive, children, text }: Props) => {
  const dispatch = useDispatch();

  const logOut = () => {
    if (text !== "Log out") return;
    localStorage.removeItem("user");
    dispatch(setUserDetails({}));
  };
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
