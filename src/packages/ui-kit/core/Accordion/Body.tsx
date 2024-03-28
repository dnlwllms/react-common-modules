import { FC, useContext, useEffect, useRef } from "react";

import { BodyProps } from "./types";
import { ValueContext } from "./context";

const Body: FC<BodyProps> = ({ children }) => {
  const { isOpen, isOpenOnMount } = useContext(ValueContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        ref.current.style.height = "auto";
      } else {
        ref.current.style.height = "0";
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      style={{
        height: isOpenOnMount ? "auto" : 0,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Body;
