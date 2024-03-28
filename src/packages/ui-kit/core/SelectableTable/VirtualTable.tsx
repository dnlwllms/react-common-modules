import { FC, useContext, useEffect, useRef } from "react";

import { VirtualTableProps } from "./types";
import SelectableTableStyledComponents from "./styled";
import SelectableTableContext from "./context";

import Table from "../Table";

const { VirtualTableContainer } = SelectableTableStyledComponents;

const VirtualTable: FC<VirtualTableProps> = ({ selectedPoints }) => {
  const { hasHeader, ...props } = useContext(SelectableTableContext);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selection = window.getSelection();

    if (ref.current && selection) {
      selection.selectAllChildren(ref.current);
    }
  }, [selectedPoints]);

  return (
    <VirtualTableContainer ref={ref}>
      <Table {...props} onContextMenu={(e) => e.preventDefault()}>
        {({ entryData }) => {
          return (
            <>
              {hasHeader && <Table.Head />}
              <Table.Body>
                {entryData.map((row, rowIndex) => {
                  if (
                    selectedPoints.find(
                      (selectedCell) => selectedCell[0] === rowIndex
                    )
                  ) {
                    return (
                      <tr key={rowIndex}>
                        {row.map((col, colIndex) => {
                          if (
                            selectedPoints.find(
                              (selectedCell) => selectedCell[0] === rowIndex && selectedCell[1] === colIndex
                            )
                          ) {
                            return <td key={colIndex}>{col[1]}</td>;
                          }
                          return <td key={colIndex} />;
                        })}
                      </tr>
                    );
                  }
                  return null;
                })}
              </Table.Body>
            </>
          );
        }}
      </Table>
    </VirtualTableContainer>
  );
};

export default VirtualTable;
