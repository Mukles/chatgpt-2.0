interface Props {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

const TextArea = ({ textAreaRef }: Props) => {
  const limit = 100;
  let scrollHeightBefore = 0;
  let less = false;

  const adjustFont = (textarea: HTMLTextAreaElement) => {
    scrollHeightBefore =
      scrollHeightBefore !== 0 ? scrollHeightBefore : textarea.scrollHeight;
    const scrollHeightAfter = less ? scrollHeightBefore : textarea.scrollHeight;

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

  return <textarea ref={textAreaRef} onChange={handleChange} />;
};

export default TextArea;
