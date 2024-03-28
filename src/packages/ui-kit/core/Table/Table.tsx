import { useEffect, useMemo, useState } from "react";

import { TableContext } from "./context";
import { TableComponent } from "./types";
import { getEntryColumns, getEntryDataBindingColumns } from "./helper";

import Head from "./Head";
import Body from "./Body";

const Table: TableComponent = ({
  columns,
  initialData: data,
  asKey,
  children,
  onRowClick,
  ...props
}) => {
  // --> Column 관련 hooks
  // 클라이언트 전용 display 칼럼 (컬럼 숨기기와 같은 기능을 구현하기 위해 보이는 column과 초기값 구분)
  // 클라이언트에서 쉽게 사용하기 위해 entry 스타일로 변환한 데이터
  const entryColumns = getEntryColumns(columns);

  // --> Data 관련 hooks
  // 클라이언트 전용 display 데이터 (필터와 같은 기능을 구현하기 위해 보이는 data과 초기값 구분)
  const [clientData, setClientData] = useState(data);

  useEffect(() => {
    setClientData(data);
  }, [data]);

  // 클라이언트에서 쉽게 사용하기 위해 entry 스타일로 변환한 데이터
  const entryData = useMemo(
    () => getEntryDataBindingColumns(columns, clientData),
    [columns, clientData]
  );

  const contextValue = {
    columns,
    data,
    clientData,
    setClientData,
    entryColumns,
    entryData,
    onRowClick,
    asKey,
  };

  return (
    <TableContext.Provider value={contextValue}>
      <table {...props}>
        <colgroup>
          {entryColumns[entryColumns.length - 1].map(({ key, width }) => (
            <col key={key} style={{ width }} />
          ))}
        </colgroup>
        {children ? (
          children(contextValue)
        ) : (
          <>
            <Table.Head />
            <Table.Body />
          </>
        )}
      </table>
    </TableContext.Provider>
  );
};

Table.Head = Head;
Table.Body = Body;

Table.displayName = "CoreTable";

export default Table;
