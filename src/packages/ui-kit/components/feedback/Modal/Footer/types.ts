export interface ModalFooterButton {
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export interface FooterProps {
  primary: ModalFooterButton;
  secondary?: ModalFooterButton;
}
