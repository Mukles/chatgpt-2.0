import { ForwardedRef, forwardRef, RefAttributes } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../App/store";
import ThreeDotsLoader from "../../helpers/Three-dots-loader";
import { Submit } from "../../icons/Icons";

interface Props {
  submitHandler: any;
  isLoading: boolean;
}

interface Props extends RefAttributes<HTMLTextAreaElement> {}

export const InputBox = forwardRef(
  (
    { isLoading, submitHandler }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const limit = 100;
    let scrollHeightBefore = 0;
    let less = false;

    const isDone = useSelector<RootState, boolean>(
      (state) => state.other.isAnimateDone
    );

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
      // reset the height
      textarea.style.height = "";
      // set the height
      textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
      adjustFont(e.target);
    };

    return (
      <form onSubmit={submitHandler} className="input-container">
        <div>
          <div className="input">
            <textarea ref={ref} onChange={handleChange} />
            <button disabled={isLoading || !isDone} type="submit">
              {isLoading || !isDone ? <ThreeDotsLoader /> : <Submit />}
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
