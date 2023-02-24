import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAddMessageMutation } from "../App/feature/conversation/conversationApi";
import { add } from "../App/feature/conversation/conversationSlice";
import { IModel } from "../App/feature/model/modelSlice";
import { toggleAnimation } from "../App/feature/user/other";
import { RootState } from "../App/store";

export const useAddMessage = (
  textAreaRef: React.RefObject<HTMLTextAreaElement>
) => {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const userId = useSelector<RootState, string>((state) => state.user._id);
  const { model, temperature } = useSelector<RootState, IModel>(
    (state) => state.model
  );
  const [addMessage, { isLoading, data }] = useAddMessageMutation();
  const [newResponse, setResponse] = useState<any>();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (!textAreaRef.current) return null;
    const prompt = textAreaRef.current.value;
    dispatch(toggleAnimation());

    //generate pramas depending on chat or data
    const params =
      chatId || data?._id
        ? { prompt, model, temperature, chatId: chatId ?? data?._id }
        : { prompt, model, temperature, userId };

    !chatId && dispatch(add({ sender: "user", message: prompt }));

    try {
      const response = await addMessage(params).unwrap();
      textAreaRef.current.value = "";
      const newMessage =
        chatId || data?._id
          ? response.newMessage
          : response?.messages && response.messages.length > 0
          ? response.messages[response.messages.length - 1]
          : { sender: "gpt", message: "something went wrong" };
      dispatch(add(newMessage));
      setResponse(newMessage._id);
    } catch (err) {
      dispatch(add({ sender: "gpt", message: "something went wrong" }));
      dispatch(toggleAnimation());
    }
  };

  return { isLoading, newResponse, submitHandler };
};
