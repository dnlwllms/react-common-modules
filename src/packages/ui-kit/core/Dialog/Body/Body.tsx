import { useContext } from "react";
import { createPortal } from "react-dom";

import { DialogBodyComponent } from "../types";

import Popup from "./Popup";
import { DialogContext } from "../context";

const Body: DialogBodyComponent = ({ children }) => {
  const context = useContext(DialogContext);

  return context.isOpen ? createPortal(children, document.body) : null;
};

Body.Popup = Popup;

export default Body;
