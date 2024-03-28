import { ReactNode } from "react";

type FooterButton = {
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

export interface ModalProps {
  onClose?: () => void;
  title: string;
  children: ReactNode;

  size: "large" | "x-large" | "medium";

  primary: FooterButton;
  secondary?: FooterButton;
}
