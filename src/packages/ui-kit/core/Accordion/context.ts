import { Dispatch, SetStateAction, createContext } from "react";

export const HandlerContext = createContext<{
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  setIsOpen: () => {},
});

export const ValueContext = createContext({
  isOpen: false,
  isOpenOnMount: false,
  delay: 0,
});
