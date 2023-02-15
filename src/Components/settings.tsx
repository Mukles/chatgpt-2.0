import { useState } from "react";
import { useGetModelsQuery } from "../App/feature/model/modelApi";

const Settings = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setValue] = useState("");
  const { isLoading, isSuccess, data: lists } = useGetModelsQuery();
  console.log({ lists });
  console.log(process.env.REACT_APP_API_URI);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const onSelect = (val: string) => {
    setValue(val);
    setOpen(false);
  };

  return (
    <div className="setttings">
      <div className="settting-item selector">
        <button className="select-feild" onClick={toggleOpen}>
          <p>Select Modal</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <ul className="select-list">
            {false ? (
              <></>
            ) : (
              <>
                {lists?.map((list) => {
                  return <li key={list.id}>{list.id}</li>;
                })}
              </>
            )}
          </ul>
        )}

        <div className="notes">
          <p>Smart - Davinci</p>
          <p>Code - Crushman</p>
        </div>

        <p>
          The model parameter controls the engine used to generate the response
          . Davinci produces best results.
        </p>
      </div>
      <div className="settting-item">
        <label htmlFor="model">Temperature</label>
        <input type={"number"} />
        <div className="notes">
          <p>0 - Logical</p>
          <p>0.5 - Balanced</p>
          <p>1 - Creative</p>
        </div>
        <p>
          The model parameter controls the engine used to generate the response
          . Davinci produces best results.
        </p>
      </div>
    </div>
  );
};

export default Settings;
