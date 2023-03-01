import { useEffect } from "react";

export const useScrollTop = (isAdding: boolean) => {
  useEffect(() => {
    const wrapper = document.querySelector(".messages-wrapper") as HTMLElement;
    wrapper.scrollTop = wrapper.scrollHeight + 120;
  }, [isAdding]);
};
