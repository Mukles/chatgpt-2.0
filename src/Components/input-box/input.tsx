import { Submit } from "../../icons/Icons";

export const InputBox = () => {
  return (
    <form>
      <div className="input-container">
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
