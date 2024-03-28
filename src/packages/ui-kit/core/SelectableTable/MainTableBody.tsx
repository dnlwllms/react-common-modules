import { FC, useContext, useEffect, useReducer, useRef, useState } from "react";

import { CellState, MainTableBodyProps } from "./types";
import SelectableTableStyledComponents from "./styled";

import Table, { TableContext } from "../Table";

import reducer from "./reducer";
import { isSelected } from "./utils";

const { StyledTableCell } = SelectableTableStyledComponents;

const MainTableBody: FC<MainTableBodyProps> = ({ onSelect }) => {
  const tableContext = useContext(TableContext);
  const [state, dispatch] = useReducer(reducer, {
    isActive: false,
  });

  const fnKeyActive = useRef(false);

  const [selectedPoints, setSelectedPoints] = useState<[number, number][]>([]);

  useEffect(() => {
    if (state.startPoint) {
      const selectedPoints: [number, number][] = [];

      tableContext.entryData.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          const current: [number, number] = [rowIndex, colIndex];

          if (state.startPoint) {
            if (state.endPoint) {
              if (isSelected(current, state.startPoint, state.endPoint)) {
                selectedPoints.push(current);
              }
            } else if (state.currentPoint) {
              if (isSelected(current, state.startPoint, state.currentPoint)) {
                selectedPoints.push(current);
              }
            }
          }
        });
      });

      setSelectedPoints((prev) => {
        return fnKeyActive.current
          ? prev.concat(selectedPoints)
          : selectedPoints;
      });
    }
  }, [
    state.endPoint,
    state.startPoint,
    state.currentPoint,
    tableContext.entryData,
  ]);

  useEffect(() => {
    onSelect(selectedPoints);
  }, [onSelect, selectedPoints]);

  useEffect(() => {
    const handleWindowMouseDown = () => {
      dispatch({ type: "setStartPoint", payload: undefined });
      setSelectedPoints([]);
    };
    const handleWindowMouseUp = (e: MouseEvent) => {
      if (!e.shiftKey) {
        dispatch({ type: "setEndPoint" });
      }
    };

    window.addEventListener("mousedown", handleWindowMouseDown);
    window.addEventListener("mouseup", handleWindowMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleWindowMouseDown);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, []);

  const handleMouseDown = (point: [number, number], e: React.MouseEvent) => {
    e.stopPropagation();

    fnKeyActive.current = e.altKey || e.metaKey || e.ctrlKey;

    if (e.shiftKey) {
      dispatch({ type: "setEndPoint", payload: point });
    } else {
      dispatch({ type: "setStartPoint", payload: point });
    }
  };

  const handleMouseMove = (point: [number, number]) => {
    if (state.isActive) {
      dispatch({ type: "setCurrentPoint", payload: point });
    }
  };
  return (
    <Table.Body>
      {tableContext.entryData.map((row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {row.map(([colKey, value], colIndex) => {
              const key: [number, number] = [rowIndex, colIndex];
              let cellState: CellState;

              const isSelectedCell = !!selectedPoints.find(
                (point) => point.toString() === key.toString()
              );

              if (isSelectedCell) {
                cellState = "selected";
              }

              if (state.startPoint) {
                const [x, y] = state.startPoint;
                if (key[0] === x && key[1] === y) {
                  cellState = "startPoint";
                }
              }
              if (state.endPoint) {
                const [x, y] = state.endPoint;
                if (key[0] === x && key[1] === y) {
                  cellState = "endPoint";
                }
              }

              return (
                <StyledTableCell
                  key={key.toString()}
                  state={cellState}
                  onMouseDown={(e) => handleMouseDown(key, e)}
                  onMouseMove={() => handleMouseMove(key)}
                  data-selected={isSelectedCell}
                >
                  {value}
                </StyledTableCell>
              );
            })}
          </tr>
        );
      })}
    </Table.Body>
  );
};

export default MainTableBody;
