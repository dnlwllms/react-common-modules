import { PropsWithChildren } from "react";

export interface BadgeProps extends PropsWithChildren {
  value?: string | number;
  visible?: boolean;
}
