import { ChangeEvent, PropsWithChildren, ReactElement } from "react";

export interface EditorProps {
  initialRows?: RowConfig[];
  options: EditorOptions;
  onSubmit: (rows: RowConfig[]) => void;
}

export interface RowProps extends PropsWithChildren {
  config: RowConfig;
}

export interface ToolPopupProps {
  onItemClick: (item: ItemConfig) => void;
  onOpen: (isOpen: boolean) => void;
}

export interface MenuProps {
  onOpen: (isOpen: boolean) => void;
}

export interface EditorOptions {
  items: ItemConfig[];
}

export interface ItemConfig {
  title: string;
  component: ReactElement;
  isDefault?: boolean;
  hasNoChildren?: boolean;
}

export interface RowConfig {
  index: number;

  id: string;
  item: ItemConfig;
  props?: any;

  open?: () => void;
  close?: () => void;
}

export interface FieldProps {
  label: string;
  value: ValueType;
  autoFocus?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export type ValueType =
  | "object"
  | "array"
  | "string"
  | "boolean"
  | "number"
  | "invalid";

export interface EditModalProps {
  config: RowConfig;
}
