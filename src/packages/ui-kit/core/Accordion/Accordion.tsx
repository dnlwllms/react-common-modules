import { useEffect, useState } from "react";

import { InternalAccordion } from "./types";

import Body from "./Body";
import Trigger from "./Trigger";
import { HandlerContext, ValueContext } from "./context";

const Accordion: InternalAccordion = ({ children, isOpenOnMount, delay }) => {
  const [isOpen, setIsOpen] = useState(!!isOpenOnMount);
  useEffect(() => {
    if (isOpenOnMount !== undefined) {
      setIsOpen(isOpenOnMount);
    }
  }, [isOpenOnMount]);

  return (
    <HandlerContext.Provider
      value={{
        setIsOpen,
      }}
    >
      <ValueContext.Provider
        value={{
          isOpen,
          isOpenOnMount: !!isOpenOnMount,
          delay: delay || 0.2,
        }}
      >
        {children(isOpen)}
      </ValueContext.Provider>
    </HandlerContext.Provider>
  );
};

Accordion.Body = Body;
Accordion.Trigger = Trigger;

export default Accordion;
