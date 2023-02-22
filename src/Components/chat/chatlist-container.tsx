import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  useClearConversationMutation,
  useDeleteConversationMutation,
  useGetConversationQuery,
} from "../../App/feature/conversation/conversationApi";
import { setUserDetails } from "../../App/feature/user/userSlice";
import { RootState } from "../../App/store";
import { data } from "../../data/data";
import Loader from "../../helpers/Loader";
import { Chat, Delete, Edit } from "../../icons/Icons";
import ConversationItem from "./conversationItem";

const ListContainer = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const userId = useSelector<RootState, string>((state) => state.user._id);
  const { data: conversations, isLoading } = useGetConversationQuery(userId);
  const [onDelete, { isLoading: isDeleting }] = useDeleteConversationMutation();
  const [clearAll, { isLoading: isClearing }] = useClearConversationMutation();

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
            conversations?.map((conversation, i: number) => {
              const { firstMessage, _id } = conversation;
              const isActive = chatId === conversation._id;
              return (
                <ConversationItem key={_id}>
                  <li>
                    <Link
                      to={`/chat/${_id}`}
                      className={`single-chat ${isActive ? "active" : ""}`}
                    >
                      <p>
                        <Chat />
                        <span>{firstMessage}</span>
                      </p>

                      {isActive && (
                        <div>
                          <button>
                            <Edit />
                          </button>
                          <button
                            disabled={isDeleting}
                            onClick={() =>
                              onDelete({ userId, conversationId: _id })
                            }
                          >
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
          {data.map((item, i: number) => {
            const clickHanler =
              item.text === "Clear conversations"
                ? () => clearAll(userId)
                : () => logOut(item);
            return (
              <ConversationItem key={i}>
                <li>
                  <button
                    disabled={item.text === "Clear conversations" && isClearing}
                    className={`single-chat`}
                    onClick={clickHanler}
                  >
                    <p className="flex-none">
                      {item.icon()}
                      <span>{item.text}</span>
                    </p>
                  </button>
                </li>
              </ConversationItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListContainer;
