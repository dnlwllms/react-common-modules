export interface CellectProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  size: [number, number];
  renderCell: (cell: {
    coordinate: CellectCoordinate;
    isStartPoint?: boolean;
    isEndPoint?: boolean;
    isSelected?: boolean;
    isFinished?: boolean;
  }) => React.ReactNode;
}

export type CellectCoordinate = [number, number];

export type UseCellectConfig = {
  onChange?: (cellects: CellectCoordinate[]) => void;
  isSingleOnly?: boolean;
};
