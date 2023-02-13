import { useLayoutEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useCallbackRef } from "./useCallback-ref";

interface Bounds {
  height: number;
  width: number;
}

interface Measure {
  bounds: Bounds;
  ref: React.RefObject<HTMLElement>;
}

export function useMeasure(): Measure {
  const [element, attachRef] = useCallbackRef();
  const [bounds, setBounds] = useState<Bounds | any>({});

  useLayoutEffect(() => {
    function onResize([entry]: ResizeObserverEntry[]) {
      setBounds({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    }

    const observer = new ResizeObserver(onResize);

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return {
    bounds,
    ref: attachRef,
  };
}
