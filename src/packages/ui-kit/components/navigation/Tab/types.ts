import { HTMLAttributes, ReactNode } from "react";

export type TabType = "text" | "box";

export type TabSize = "small" | "medium" | "large";

export interface TabItem {
  key: string;
  title: ReactNode;
}

export interface TabProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * @default "text"
   */
  type?: TabType;
  /**
   * @default "medium"
   */
  size?: TabSize;
  items: TabItem[];

  isAutoFocus?: boolean;
  
  value?: string | number;
  onChange?: (tabItem: TabItem) => void;
}
