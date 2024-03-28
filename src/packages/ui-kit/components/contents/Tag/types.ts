import { HTMLAttributes } from "react";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  isCapsule?: boolean;
  isFilled?: boolean;
}
