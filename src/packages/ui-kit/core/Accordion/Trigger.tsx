import { FC, MouseEvent, cloneElement, useContext } from "react";

import { TriggerProps } from "./types";
import { HandlerContext, ValueContext } from "./context";

const Trigger: FC<TriggerProps> = ({ children, onClick }) => {
  const { isOpen } = useContext(ValueContext);
  const { setIsOpen } = useContext(HandlerContext);

  return cloneElement(children, {
    onClick: (e: MouseEvent) => {
      if (onClick) {
        onClick(isOpen);
      } else {
        setIsOpen(!isOpen);
      }

      if (children.props.onClick) {
        children.props.onClick(e);
      }
    },
  });
};

export default Trigger;
