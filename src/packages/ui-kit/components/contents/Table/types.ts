import { TableProps as CoreTableProps } from "../../../core/Table";

export type TableVariant = "main" | "sub";

export interface TableProps extends CoreTableProps {
  variant: TableVariant;

  page?: number;
  pageSize?: number;

  totalCount: number;

  actionButtons?: {
    title: string;
    onClick: () => void;
  }[];

  excelFileName?: string;

  isLoading?: boolean;

  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;

  pagination?: {
    type?: "basic" | "numeric";
    numericOptions?: {
      max?: number;
    };
  };

  checkedRows?: any[];
  onCheck?: (row: any) => void;
}
