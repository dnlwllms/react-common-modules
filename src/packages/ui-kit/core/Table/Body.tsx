import { FC, useContext } from "react";
import { TableBodyProps } from "./types";
import { TableContext } from "./context";

const Body: FC<TableBodyProps> = ({ children, ...props }) => {
  const tableContext = useContext(TableContext);

  return (
    <tbody {...props}>
      {children ||
        tableContext.entryData.map((row, index) => {
          return (
            <tr
              key={index}
              onClick={() => {
                if (tableContext.onRowClick) {
                  tableContext.onRowClick(Object.fromEntries(row));
                }
              }}
            >
              {row
                .filter(([key]) => {
                  const column = tableContext.columns.find(
                    (column) => column.key === key
                  );

                  return !column?.isHide;
                })
                .map(([key, value]) => {
                  const column = tableContext.columns.find(
                    (column) => column.key === key
                  );

                  return (
                    <td
                      key={key}
                      title={value?.toString()}
                      align={column?.bodyAlign}
                    >
                      {column?.render
                        ? column.render(value, Object.fromEntries(row))
                        : value?.toString()}
                    </td>
                  );
                })}
            </tr>
          );
        })}
    </tbody>
  );
};

export default Body;
