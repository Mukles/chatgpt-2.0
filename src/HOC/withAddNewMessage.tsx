import { useRef } from "react";
import { InputBox } from "../Components/input-box/input";
import { useAddMessage } from "../hooks/useAddNewMessage";

const withAddNewMessage = (Component: any) => {
  return () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const { isLoading, submitHandler, data } = useAddMessage(textAreaRef);
    return (
      <>
        <Component isAdding={isLoading} />
        <InputBox
          submitHandler={submitHandler}
          isLoading={isLoading}
          data={data}
          ref={textAreaRef}
        />
      </>
    );
  };
};

export default withAddNewMessage;
