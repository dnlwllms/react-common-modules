export type PaginationType = "number" | "dot" | "basic" | "numeric";

export type PaginationColor = "gray01" | "gray02";

export interface PaginationProps {
  /**
   * @default "number"
   */
  type?: PaginationType;
  /**
   * @default "gray01"
   */
  total?: number;
  /**
   * @default 1
   */
  current?: number;
  /**
   * @default 1
   */
  color?: PaginationColor;

  onChange?: (current: number) => void;

  numericOptions?: {
    max?: number
  }
}
