import { FC, PropsWithChildren, useContext } from "react";
import { createPortal } from "react-dom";
import { DialogContext } from "./context";

interface DropdownProps extends PropsWithChildren {
  container: HTMLDivElement;
}

const Dropdown: FC<DropdownProps> = ({ container, children }) => {
  const { isOpen } = useContext(DialogContext);

  return isOpen ? createPortal(children, container) : null;
};

export default Dropdown;
