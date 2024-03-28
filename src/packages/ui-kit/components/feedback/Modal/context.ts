import { createContext } from "react";
import { ModalContextType } from "./types";

const ModalContext = createContext<ModalContextType>({
  size: "medium",
});

export default ModalContext;
