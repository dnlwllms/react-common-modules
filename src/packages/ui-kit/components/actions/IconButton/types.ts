import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type ButtonSize = "x-small" | "small" | "medium";


export interface IconButtonProps
  extends PropsWithChildren,
    StyledButtonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export interface StyledButtonProps {
  /**
   * @default "medium"
   */
  size?: ButtonSize;
  isDisabled?: boolean;
}
