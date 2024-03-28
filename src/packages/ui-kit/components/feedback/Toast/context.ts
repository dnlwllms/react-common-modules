import { createContext } from "react";
import { ToastContextType } from "./types";

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  setToasts: console.log,
});

export default ToastContext;
