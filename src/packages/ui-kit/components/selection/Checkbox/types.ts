import { InputHTMLAttributes } from "react";

export type CheckboxSize = "small" | "x-small";

export interface CheckboxProps
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
  size?: CheckboxSize;
}
