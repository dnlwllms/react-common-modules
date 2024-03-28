import { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "small" | "medium" | "large";
export type InputShape = "box" | "underline";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  /**
   * @default "box"
   */
  shape?: InputShape;
  /**
   * @default "medium"
   */
  size?: InputSize;
  isDisabled?: boolean;
  isCapsule?: boolean;
  hasClearButton?: boolean;
  suffixNode?: ReactNode;
  isError?: boolean;
  icon?: ReactNode;
  onChange?: (value: string) => void;
}
