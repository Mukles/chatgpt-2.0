import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetConversationQuery } from "../../App/feature/conversation/conversationApi";
import { setUserDetails } from "../../App/feature/user/userSlice";
import { RootState } from "../../App/store";
import { data } from "../../data/data";
import Loader from "../../helpers/Loader";
import { Chat, Delete, Edit } from "../../icons/Icons";
import ConversationItem from "./conversationItem";
const ListContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector<RootState, string>((state) => state.user._id);
  const { data: conversations, isLoading } = useGetConversationQuery(userId);

  const logOut = (item: any) => {
    if (item.text !== "Log out") return;
    localStorage.removeItem("user");
    dispatch(setUserDetails({}));
  };

  return (
    <div className="h-100">
      <div className="aside-top">
        <ul className="chatlist-continaer">
          {isLoading ? (
            <Loader />
          ) : (
            conversations.map((conversation: any, i: number) => {
              const { firstMessage, _id } = conversation;
              return (
                <ConversationItem key={_id}>
                  <li>
                    <Link
                      to={`/chat/${_id}`}
                      className={`single-chat ${true ? "active" : ""}`}
                    >
                      <p>
                        <Chat />
                        <span>{firstMessage}</span>
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
              );
            })
          )}
        </ul>
      </div>
      <div className="aside-bottom">
        <ul className="chatlist-continaer">
          {data.map((item, i: number) => (
            <ConversationItem key={i}>
              <li>
                <button className={`single-chat`} onClick={() => logOut(item)}>
                  <p className="flex-none">
                    {item.icon()}
                    <span>{item.text}</span>
                  </p>
                </button>
              </li>
            </ConversationItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListContainer;
