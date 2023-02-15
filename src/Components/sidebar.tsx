import React, { useState } from "react";
import ListContainer from "./chat/chatlist-container";
import Pager from "./Pager";
import Settings from "./settings";

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
            <li key={i}>
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

      <Pager value={value}>
        {tabs.map((tab) => (
          <React.Fragment key={tab}>{item[tab as any]}</React.Fragment>
        ))}
      </Pager>
    </>
  );
};

export default Sidebar;
