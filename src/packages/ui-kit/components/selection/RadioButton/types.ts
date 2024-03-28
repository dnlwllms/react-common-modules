import { InputHTMLAttributes } from "react";

export interface RadioButtonProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "checked" | "type" | "size"
  > {
  isChecked?: boolean;
  isDisabled?: boolean;

  onChange?: (isChecked: boolean) => void;

  label?: string;

  /**
   * @default "small"
   */
  size?: RadioButtonSize;
}

export type RadioButtonSize = "small" | "x-small";
