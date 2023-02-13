import { Delete, Discord, FAQ, Light, Logout } from "../../icons/Icons";
import ConversationItem from "./conversationItem";

const ListContainer = () => {
  return (
    <div className="h-100">
      <div className="aside-top">
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
    </div>
  );
};

export default ListContainer;
