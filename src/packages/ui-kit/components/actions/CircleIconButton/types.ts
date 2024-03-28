import { IconButtonProps } from "../IconButton/types";

export interface CircleIconButtonProps extends Omit<IconButtonProps, "size"> {
  isActive: boolean;
}
