import { ReactElement, HTMLAttributes } from "react";

export interface VerticalTabItem {
  key: string;
  title: string;
  icon?: ReactElement;
}

export interface VerticalTabProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: VerticalTabItem[];

  value?: string | number;
  onChange?: (VerticalTabItem: VerticalTabItem) => void;
}
