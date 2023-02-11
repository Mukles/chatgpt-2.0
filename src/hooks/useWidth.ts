import { useEffect, useState } from "react";

export const useWidth = function () {
  const [width, setWidth] = useState<undefined | number>();

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};
