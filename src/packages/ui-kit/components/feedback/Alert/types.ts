export type AlertType = "error" | "caution";

export interface AlertProps {
  /**
   * @default "error"
   */
  alertType: AlertType;
  title: string;
  description: string;
  buttonLabel: string;
  onCloseClick: () => void;
  onButtonClick: () => void;
}
