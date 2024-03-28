import _ from "lodash";
import * as xlsx from "xlsx";

import { FC, Fragment, useMemo, useRef } from "react";

import { TableProps } from "./types";
import DataGridStyledComponents from "./styled";

import { Dialog } from "../../../core";
import { TableColumn, TableContextType } from "../../../core/Table";

import { Checkbox } from "../../selection";
import { Spinner, Empty } from "../../feedback";
import { Button, Menu, TextButton } from "../../actions";

import { CenterAlignmentSVG } from "../../../icons/filled/edit";
import { DownloadSVG } from "../../../icons/outlined/arrows";

import { Pagination } from "..";

const {
  StyledTable,
  StyledSubTable,
  Container,
  ControlContainer,
  ControlDivider,
  TableContainer,
  PaginationContainer,
} = DataGridStyledComponents;

const CHECKBOX_COLUMN_KEY = "table-checkbox-column";

const Table: FC<TableProps> = ({
  totalCount,
  actionButtons,
  excelFileName = "export",
  onPageChange,
  onPageSizeChange,
  isLoading,
  page,
  pageSize,
  pagination = {
    type: "numeric",
    numericOptions: {
      max: 5,
    },
  },
  checkedRows = [],
  onCheck,
  variant = "main",
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const data = props.initialData?.map((row: any) =>
    onCheck
      ? _.merge(row, {
          [CHECKBOX_COLUMN_KEY]: row,
        })
      : row
  );

  const hasData = !isLoading && data?.length !== 0;

  const key = props.asKey || "id";

  const filteredDisableCheckRows = useMemo(() => {
    return (data || []).filter(
      (row: any) => !row?.[CHECKBOX_COLUMN_KEY]?.isDisabled
    );
  }, [data]);

  const columns: TableColumn[] = useMemo(() => {
    return onCheck
      ? [
          {
            key: CHECKBOX_COLUMN_KEY,
            title: (
              <Checkbox
                isDisabled={!hasData}
                isChecked={
                  checkedRows.length > 0 &&
                  checkedRows.length === filteredDisableCheckRows?.length
                }
                onChange={(isChecked) => {
                  onCheck(isChecked ? filteredDisableCheckRows : []);
                }}
              />
            ),
            render: (row: any) => {
              const checkedRow = checkedRows.find(
                (checkedRow) => checkedRow[key] === row[key]
              );

              return (
                <Checkbox
                  isChecked={!!checkedRow}
                  isDisabled={!!row[CHECKBOX_COLUMN_KEY]?.isDisabled}
                  onChange={(isChecked) => {
                    let copy = _.cloneDeep(checkedRows);

                    if (isChecked) {
                      copy = copy.concat(row);
                    } else {
                      copy = copy.filter((item) => item[key] !== row[key]);
                    }

                    onCheck(copy);
                  }}
                />
              );
            },
          },
          ...props.columns,
        ]
      : props.columns;
  }, [
    checkedRows,
    filteredDisableCheckRows,
    hasData,
    key,
    onCheck,
    props.columns,
  ]);

  const totalPage = pageSize ? Math.ceil(totalCount / pageSize) : 1;

  const handleExcelDownload = () => {
    if (ref.current) {
      const workbook = xlsx.utils.table_to_book(
        ref.current.querySelector("table")
      );
      xlsx.writeFile(workbook, `${excelFileName}.xlsb`);
    }
  };

  const renderChildren = (tableContext: TableContextType) => {
    return (
      <Fragment>
        <thead>
          {tableContext.entryColumns.map((row, rowIndex) => {
            return row[rowIndex] ? (
              <tr key={row[rowIndex].key || rowIndex}>
                {row
                  .filter(({ isHide }) => !isHide)
                  .map((column) => {
                    return <th key={column.key}>{column.title}</th>;
                  })}
              </tr>
            ) : null;
          })}
        </thead>
        <tbody>
          <tr>
            <td colSpan={columns.filter(({ isHide }) => !isHide).length}>
              {isLoading ? (
                <Empty
                  icon={<Spinner size="small" />}
                  description="데이터를 불러오는 중 입니다."
                />
              ) : (
                <Empty description="조회된 내역이 없습니다." />
              )}
            </td>
          </tr>
        </tbody>
      </Fragment>
    );
  };

  if (variant === "main") {
    return (
      <Container>
        <ControlContainer>
          <div>
            <TextButton size="small" style={{ cursor: "default" }}>
              <span>총 {totalCount}건</span>
            </TextButton>
            <ControlDivider />
            <Dialog>
              {({ handleClose, triggerRect }) => {
                return (
                  <>
                    <Dialog.Trigger>
                      <TextButton
                        hasUnderline
                        size="small"
                        icon={{
                          position: "leading",
                          node: <CenterAlignmentSVG width={12} height={12} />,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{pageSize}개씩 보기</span>
                      </TextButton>
                    </Dialog.Trigger>
                    <Dialog.Body>
                      <Dialog.Body.Popup
                        handleClose={handleClose}
                        triggerRect={triggerRect}
                        positionOption={{
                          topMargin: (triggerRect?.height || 0) + 8,
                        }}
                      >
                        <div style={{ position: "absolute" }}>
                          <Menu
                            title="테이블 보기 설정"
                            defaultValue={pageSize?.toString() || ""}
                            options={[
                              {
                                title: "10개씩 보기",
                                value: "10",
                              },
                              {
                                title: "20개씩 보기",
                                value: "20",
                              },
                              {
                                title: "50개씩 보기",
                                value: "50",
                              },
                              {
                                title: "100개씩 보기",
                                value: "100",
                              },
                            ]}
                            onChange={(value) => {
                              if (onPageSizeChange) {
                                onPageSizeChange(Number(value));
                              }
                              handleClose();
                            }}
                          />
                        </div>
                      </Dialog.Body.Popup>
                    </Dialog.Body>
                  </>
                );
              }}
            </Dialog>
            <ControlDivider />
            <TextButton
              hasUnderline
              size="small"
              icon={{
                position: "leading",
                node: <DownloadSVG width={12} height={12} />,
              }}
              onClick={handleExcelDownload}
            >
              엑셀 다운로드
            </TextButton>
          </div>
          {actionButtons && (
            <div>
              {actionButtons.map(({ title, onClick }) => {
                return (
                  <Button
                    key={title}
                    size="small"
                    color="gray02"
                    onClick={onClick}
                  >
                    {title}
                  </Button>
                );
              })}
            </div>
          )}
        </ControlContainer>
        <TableContainer ref={ref}>
          <StyledTable
            {...props}
            columns={columns}
            initialData={data}
            {...(!hasData && {
              children: renderChildren,
            })}
          />
        </TableContainer>
        {totalPage > 1 && (
          <PaginationContainer>
            <Pagination
              type={pagination.type}
              current={page || 1}
              total={totalPage}
              onChange={onPageChange}
              numericOptions={pagination.numericOptions}
            />
          </PaginationContainer>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <ControlContainer>
          <div>
            <TextButton size="small" style={{ cursor: "default" }}>
              <span>총 {totalCount}건</span>
            </TextButton>
          </div>
          {actionButtons && (
            <div>
              {actionButtons.map(({ title, onClick }) => {
                return (
                  <Button
                    key={title}
                    size="x-small"
                    color="gray02"
                    onClick={onClick}
                  >
                    {title}
                  </Button>
                );
              })}
            </div>
          )}
        </ControlContainer>
        <StyledSubTable
          {...props}
          columns={columns.map((column) => {
            if (column.sorter) {
              column.sorter = undefined;
            }

            return column;
          })}
          initialData={data}
          {...(!hasData && {
            children: renderChildren,
          })}
        />
        {onPageChange && totalPage > 1 && (
          <PaginationContainer>
            <Pagination
              type={pagination.type}
              current={page || 1}
              total={totalPage}
              onChange={onPageChange}
              numericOptions={pagination.numericOptions}
            />
          </PaginationContainer>
        )}
      </Container>
    );
  }
};

Table.displayName = "Table";

export default Table;
