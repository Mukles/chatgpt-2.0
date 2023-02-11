import { useNavigate } from "react-router-dom";
import { Add, Delete, Discord, FAQ, Light, Logout } from "../icons/Icons";
import ConversationItem from "./chat/conversationItem";

const Sidebar = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="aside-top">
        <button className="create-new-chat" onClick={() => navigator("/chat")}>
          <span>
            <Add />
          </span>
          <span>New chat</span>
        </button>
        <ul className="chatlist-continaer">
          <ConversationItem isActive={true} />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
        </ul>
      </div>
      <div className="aside-bottom">
        <ul className="chatlist-continaer">
          <ConversationItem text="Clear conversations">
            <Delete />
          </ConversationItem>

          <ConversationItem text="Light mode">
            <Light />
          </ConversationItem>
          <ConversationItem text="OpenAI Discord">
            <Discord />
          </ConversationItem>
          <ConversationItem text="Updates & FAQ">
            <FAQ />
          </ConversationItem>
          <ConversationItem text="Log out">
            <Logout />
          </ConversationItem>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
