import { HTMLAttributes, ReactElement } from "react";

export type EmptySize = "small" | "medium";

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactElement;
  description: string;

  /**
   * @default "medium"
   */
  size?: EmptySize;
}
