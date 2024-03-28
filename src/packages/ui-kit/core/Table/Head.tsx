import { FC, useContext, useState } from "react";

import { colors } from "../../foundations";
import { DownOneSVG, UpOneSVG } from "../../icons/filled/arrows";

import { TableContext } from "./context";
import { ColProps, TableColumn, TableHeadProps } from "./types";

const Head: FC<TableHeadProps> = ({ children }) => {
  const tableContext = useContext(TableContext);

  return (
    <thead>
      {children ||
        tableContext.entryColumns.map((row, rowIndex) => {
          return row[rowIndex] ? (
            <tr key={row[rowIndex].key || rowIndex}>
              {row
                .filter(({ isHide }) => !isHide)
                .map((column) => {
                  return <Col key={column.key} column={column} />;
                })}
            </tr>
          ) : null;
        })}
    </thead>
  );
};

export default Head;

const Col: FC<ColProps> = ({ column }) => {
  const tableContext = useContext(TableContext);

  const [sortState, setSortState] = useState<"asc" | "desc" | undefined>(
    column.sorter ? "asc" : undefined
  );

  const handleClick = (column: TableColumn) => {
    if (column.sorter) {
      if (sortState === "asc" || sortState === undefined) {
        setSortState("desc");
      } else {
        setSortState("asc");
      }
    }

    tableContext.setClientData((prev: any[]) => {
      prev.sort((a: any, b: any) => {
        if (column.sorter) {
          if (sortState === "asc" || sortState === undefined) {
            return column.sorter(b, a);
          } else {
            return column.sorter(a, b);
          }
        }
        return 0;
      });

      return [...prev];
    });
  };

  return (
    <th
      style={{
        cursor: column.sorter ? "pointer" : "default",
      }}
      colSpan={column.colSpan}
      align={column.headerAlign}
      onClick={() => handleClick(column)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <span style={{ flex: 1 }}>{column.title}</span>
        {column.sorter &&
          (column.sorterIcon || (
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UpOneSVG
                width={10}
                height={10}
                fill={sortState === "desc" ? colors.gray500 : colors.gray200}
              />
              <DownOneSVG
                width={10}
                height={10}
                fill={sortState === "asc" ? colors.gray500 : colors.gray200}
              />
            </div>
          ))}
      </div>
    </th>
  );
};
