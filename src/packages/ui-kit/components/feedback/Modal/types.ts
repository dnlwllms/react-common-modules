import { FC, ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

export type ModalSize = "medium" | "large" | "x-large";

export interface ModalProps {
  size: ModalSize;
  children: ReactElement;
}

export interface ModalComponent extends FC<ModalProps> {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

export interface ModalContextType {
  size: ModalSize;
}
