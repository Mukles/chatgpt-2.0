import { ForwardedRef, forwardRef, RefAttributes } from "react";
import { Submit } from "../../icons/Icons";

interface Props {
  submitHandler: any;
  isLoading: boolean;
  data: any;
}

interface Props extends RefAttributes<HTMLTextAreaElement> {
  // add any other props for MyComponent here
}

export const InputBox = forwardRef(
  (
    { data, isLoading, submitHandler }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const limit = 100;
    let scrollHeightBefore = 0;
    let less = false;

    const adjustFont = (textarea: HTMLTextAreaElement) => {
      scrollHeightBefore =
        scrollHeightBefore !== 0 ? scrollHeightBefore : textarea.scrollHeight;
      const scrollHeightAfter = less
        ? scrollHeightBefore
        : textarea.scrollHeight;

      if (scrollHeightAfter > scrollHeightBefore) {
        textarea.style.fontSize = "14px";
        scrollHeightBefore = scrollHeightAfter;
      }
    };

    const handleChange = (e: any) => {
      const textarea = e.target;
      textarea.style.height = ""; // reset the height
      textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px"; // set the height
      adjustFont(e.target);
    };

    return (
      <form onSubmit={submitHandler} className="input-container">
        <div>
          <div className="input">
            <textarea ref={ref} onChange={handleChange} />
            <button disabled={isLoading} type="submit">
              <Submit />
            </button>
          </div>
          <p>
            ChatGPT Jan 30 Version. Free Research Preview. Our goal is to make
            AI systems more natural and safe to interact with. Your feedback
            will help us improve.
          </p>
        </div>
      </form>
    );
  }
);
