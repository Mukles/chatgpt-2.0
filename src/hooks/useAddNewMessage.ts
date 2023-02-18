import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAddMessageMutation } from "../App/feature/conversation/conversationApi";
import { add } from "../App/feature/conversation/conversationSlice";
import { IModel } from "../App/feature/model/modelSlice";
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

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (!textAreaRef.current) return null;
    const prompt = textAreaRef.current.value;

    if (chatId || data?._id) {
      console.log({ condition: "true" });
    }

    const params =
      chatId || data?._id
        ? { prompt, model, temperature, chatId: chatId ?? data?._id }
        : { prompt, model, temperature, userId };

    console.log(params);

    !chatId && dispatch(add({ sender: "user", message: prompt }));

    try {
      const response = await addMessage(params).unwrap();
      const newMessage =
        chatId || data?._id
          ? response.newMessage
          : response?.messages && response.messages.length > 0
          ? response.messages[response.messages.length - 1]
          : { sender: "gpt", message: "something went wrong" };
      dispatch(add(newMessage));
    } catch (err) {
      console.log(err);
    }
  };

  return { isLoading, data, submitHandler };
};
