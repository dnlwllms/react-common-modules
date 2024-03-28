import { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  isError?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}
