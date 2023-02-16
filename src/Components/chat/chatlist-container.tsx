import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserDetails } from "../../App/feature/user/userSlice";
import { data } from "../../data/data";
import { Chat, Delete, Edit } from "../../icons/Icons";
import ConversationItem from "./conversationItem";

const ListContainer = () => {
  const dispatch = useDispatch();

  const logOut = (item: any) => {
    if (item.text !== "Log out") return;
    localStorage.removeItem("user");
    dispatch(setUserDetails({}));
  };

  return (
    <div className="h-100">
      <div className="aside-top">
        <ul className="chatlist-continaer">
          <ConversationItem>
            <li>
              <Link to={"/"} className={`single-chat ${true ? "active" : ""}`}>
                <p>
                  <Chat />
                  <span>{"Hello from response"}</span>
                </p>

                {true && (
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
          </ConversationItem>
          <ConversationItem>
            <li>
              <Link to={"/"} className={`single-chat ${false ? "active" : ""}`}>
                <p>
                  <Chat />
                  <span>{"Hello from response"}</span>
                </p>

                {true && (
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
          </ConversationItem>
        </ul>
      </div>
      <div className="aside-bottom">
        <ul className="chatlist-continaer">
          {data.map((item, i: number) => (
            <ConversationItem key={i}>
              <li>
                <button className={`single-chat`} onClick={() => logOut(item)}>
                  <p>
                    {item.icon()}
                    <span>{item.text}</span>
                  </p>
                </button>
              </li>
            </ConversationItem>
          ))}
          <ConversationItem>
            <li>
              <button className={`single-chat`}>
                <p>
                  <Delete />
                  <span>Clear conversations</span>
                </p>
              </button>
            </li>
          </ConversationItem>
        </ul>
      </div>
    </div>
  );
};

export default ListContainer;
