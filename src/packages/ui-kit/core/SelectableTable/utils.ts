export function isSelected(
  current: [number, number],
  start: [number, number],
  end: [number, number]
): boolean {
  const [startX, startY] = start;
  const [endX, endY] = end;

  const [currentX, currentY] = current;

  const dx = [startX, endX].sort((a, b) => a - b);
  const dy = [startY, endY].sort((a, b) => a - b);

  return (
    dx[0] <= currentX &&
    currentX <= dx[1] &&
    dy[0] <= currentY &&
    currentY <= dy[1]
  );
}
