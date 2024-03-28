import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type ButtonSize = "small" | "medium" | "large";

export interface TextButtonProps
  extends PropsWithChildren,
    StyledButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  icon?: {
    position: "trailing" | "leading";
    node: ReactNode;
  };
}
export interface StyledButtonProps {
  size?: ButtonSize;
  isDisabled?: boolean;
  hasUnderline?: boolean;
}
