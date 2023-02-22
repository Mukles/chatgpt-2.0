import { useRef } from "react";
import { InputBox } from "../Components/input-box/input";
import { useAddMessage } from "../hooks/useAddNewMessage";

const withAddNewMessage = (Component: any) => {
  return () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const { isLoading, submitHandler, newResponse } =
      useAddMessage(textAreaRef);

    return (
      <>
        <div className="messages-wrapper">
          <Component newMessageId={newResponse} isAdding={isLoading} />
        </div>
        <InputBox
          submitHandler={submitHandler}
          isLoading={isLoading}
          ref={textAreaRef}
        />
      </>
    );
  };
};

export default withAddNewMessage;
