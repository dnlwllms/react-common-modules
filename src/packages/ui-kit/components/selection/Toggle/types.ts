import { InputHTMLAttributes } from "react";

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  isOn?: boolean;
  onChange?: (isOn: boolean) => void;
}
