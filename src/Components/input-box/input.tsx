import { useRef } from "react";
import { useSelector } from "react-redux";
import { useAddMessageMutation } from "../../App/feature/conversation/conversationApi";
import { IModel } from "../../App/feature/model/modelSlice";
import { RootState } from "../../App/store";
import TextArea from "../../helpers/TextArea";
import { Submit } from "../../icons/Icons";

export const InputBox = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const userId = useSelector<RootState, string>((state) => state.user._id);
  const { model, temperature } = useSelector<RootState, IModel>(
    (state) => state.model
  );
  const [addNewMessage, { isLoading, data }] = useAddMessageMutation();
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!textAreaRef.current) return null;
    const prompt = textAreaRef.current.value;
    addNewMessage({ prompt, model, temperature, userId });
  };

  return (
    <form onSubmit={submitHandler} className="input-container">
      <div>
        <div className="input">
          <TextArea textAreaRef={textAreaRef} />
          <button type="submit">
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
