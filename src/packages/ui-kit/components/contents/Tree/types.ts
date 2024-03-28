import { HTMLAttributes, ReactNode } from "react";

export type TreeIconType = "arrow" | "character";

export type TreeContextType = {
  iconType: TreeIconType;
  selectedKeys: string[];
  isDraggable?: boolean;
  onClick?: (branch: BranchType) => void;
  onSelect?: (ids: string[], id: string, row?: any) => void;
  handleAllOpen?: () => void;
  handleAllClose?: () => void;
  isOpen?: boolean;
  selectedBranchId?: string;
  setSelectedBranchId?: (id: string) => void;
  isDisabledAutoSelect?: boolean;
};

export type BranchType = {
  id: string;
  title: string;
  children: BranchType[];
  row?: any;
};

export interface TreeProps {
  branches: BranchType[];

  /**
   * @default "arrow"
   */
  iconType: TreeIconType;

  /**
   * @default []
   */
  selectedKeys?: string[];
  onClick?: (branch: BranchType) => void;
  onSelect?: (ids: string[], id: string, row?: any) => void;

  isDraggable?: boolean;

  children?: (treeContextType: TreeContextType) => ReactNode;

  isDisabledAutoSelect?: boolean;
}

export interface BranchProps
  extends BranchType,
    Omit<HTMLAttributes<HTMLDivElement>, "id" | "title" | "children"> {
  isRoot?: boolean;
  isOpenOnMount?: boolean;
}
