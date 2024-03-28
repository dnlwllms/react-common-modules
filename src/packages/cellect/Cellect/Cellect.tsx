import { FC, Fragment } from "react";

import { CellectCoordinate, CellectProps } from "./types";
import CellectStyledComponents from "./styled";
import useCellect from "./useCellect";

const { Container } = CellectStyledComponents;

const Cellect: FC<CellectProps> = ({ size, renderCell, ...props }) => {
  const [columnSize, rowSize] = size;
  const cellect = useCellect();

  const {
    handleMouseDown,
    handleMouseMove,
    isFinished,
    startPoint,
    endPoint,
    selectedCells,
  } = cellect;

  if (
    columnSize < 1 ||
    rowSize < 1 ||
    columnSize % 1 !== 0 ||
    rowSize % 1 !== 0
  ) {
    return <Fragment>Size is must be a array of nature number.</Fragment>;
  }

  return (
    <Container {...props}>
      <tbody>
        {Array.from({ length: rowSize }).map((_, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {Array.from({ length: columnSize }).map((_, colIndex) => {
                const coordinate: CellectCoordinate = [colIndex, rowIndex];
                return (
                  <td
                    key={colIndex}
                    onMouseDown={(e: React.MouseEvent) =>
                      handleMouseDown(coordinate, e)
                    }
                    onMouseMove={(e: React.MouseEvent) =>
                      handleMouseMove(coordinate, e)
                    }
                  >
                    {renderCell({
                      coordinate,
                      isStartPoint: startPoint?.every(
                        (value, index) => value === coordinate[index]
                      ),
                      isEndPoint: endPoint?.every(
                        (value, index) => value === coordinate[index]
                      ),
                      isSelected: selectedCells.some((point) =>
                        point.every(
                          (value, index) => value === coordinate[index]
                        )
                      ),
                      isFinished,
                    })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Container>
  );
};

export default Cellect;
