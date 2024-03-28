import { FC, useContext } from "react";

import { MainTableProps } from "./types";
import SelectableTableStyledComponents from "./styled";

import Table from "../Table";
import SelectableTableContext from "./context";
import MainTableBody from "./MainTableBody";

const { StyledTable } = SelectableTableStyledComponents;

const MainTable: FC<MainTableProps> = ({ onSelect }) => {
  const { hasHeader, ...props } = useContext(SelectableTableContext);

  return (
    <StyledTable {...props} onContextMenu={(e) => e.preventDefault()}>
      {() => {
        return (
          <>
            {hasHeader && <Table.Head />}
            <MainTableBody onSelect={onSelect} />
          </>
        );
      }}
    </StyledTable>
  );
};

export default MainTable;
