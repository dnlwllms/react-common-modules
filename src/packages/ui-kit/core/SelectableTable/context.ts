import { createContext } from "react";
import { SelectableTableProps } from "./types";

const SelectableTableContext = createContext<SelectableTableProps>({
  columns: [],
  initialData: [],
  hasHeader: false,
});

export default SelectableTableContext;
