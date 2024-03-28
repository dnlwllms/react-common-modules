import { CellectCoordinate } from "./types";

export function getCellects(
  from: CellectCoordinate,
  to: CellectCoordinate
): CellectCoordinate[] {
  const result: CellectCoordinate[] = [];

  const [startX, startY] = from;
  const [endX, endY] = to;

  const floorOffset = endX > startX ? 1 : -1;
  const lineOffset = endY > startY ? 1 : -1;

  for (
    let floor = startX;
    0 <= (endX - floor) * floorOffset;
    floor += floorOffset
  ) {
    for (
      let line = startY;
      0 <= (endY - line) * lineOffset;
      line += lineOffset
    ) {
      result.push([floor, line]);
    }
  }

  return result;
}
