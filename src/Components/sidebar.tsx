import { useState } from "react";
import ListContainer from "./chat/chatlist-container";
import Pager from "./Pager";
import Settings from "./settings";

interface Item {
  conversation: any;
  settings: any;
}

const tabs = ["conversation", "settings"];
const item: any = {
  conversation: <ListContainer />,
  settings: <Settings />,
};

const Sidebar = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <div className="tab-container">
        <div className="tab-list">
          {tabs.map((tab, i) => (
            <li key={tab}>
              <button
                className={i === value ? "active" : ""}
                onClick={() => setValue(i)}
              >
                {tab}
              </button>
            </li>
          ))}
        </div>
      </div>

      <Pager value={value}>{tabs.map((tab) => item[tab as any])}</Pager>
    </>
  );
};

export default Sidebar;
