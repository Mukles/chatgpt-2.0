import { FormEvent } from "react";
import { Submit } from "../../icons/Icons";

export const InputBox = () => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${"http://localhost:8080"}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("MUkles Hossen"),
    }).then((res) => console.log(res));
  };

  return (
    <form className="input-container" onSubmit={submitHandler}>
      <div>
        <div className="input">
          <textarea />
          <button>
            <Submit />
          </button>
        </div>
        <p>
          ChatGPT Jan 30 Version. Free Research Preview. Our goal is to make AI
          systems more natural and safe to interact with. Your feedback will
          help us improve.
        </p>
      </div>
    </form>
  );
};
