import {
  Coordinate,
  GridItemDOMRect,
  GridSpaceStyle,
  WidgetRegistInfo,
  WidgetUIConfig,
} from "./types";

/**
 * CSS 문자열 픽셀 및 숫자 픽셀을 숫자 배열로 변환하는 함수
 *
 * @param pixel ex) 16, "16px", "16px 32px"
 * @returns
 */
export function pixelStringToNumbers(pixel?: string | number) {
  let pixels;
  if (pixel) {
    pixels = pixel.toString().split(" ");
  } else {
    pixels = ["0"];
  }

  return [
    parseInt(pixels[0]),
    parseInt(pixels[1] || pixels[0]),
    parseInt(pixels[2] || pixels[0]),
    parseInt(pixels[3] || pixels[1] || pixels[0]),
  ];
}

/**
 * Grid 사이즈([width, height]), 여백(padding, gap), grid([x, y]) 수를 이용하여
 * GridItem 한개의 사이즈를 구하는 함수
 *
 * @param gridSize Grid의 너비와 높이
 * @param space Grid 내부 padding과 gap
 * @param grid Grid의 레이아웃 ex) 16 * 8 인 경우 [16, 8]
 * @returns
 */
export function getGridItemSize(
  gridSize: [number, number],
  space: Partial<GridSpaceStyle>,
  grid: WidgetUIConfig["grid"]
): [number, number] {
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] =
    pixelStringToNumbers(space.padding);
  const [vGap, hGap] = pixelStringToNumbers(space.gap);

  const [x, y] = grid;

  const widthSpaceSize = paddingRight + paddingLeft + vGap * (x - 1);
  const heightSpaceSize = paddingTop + paddingBottom + hGap * (y - 1);

  const [gridWidthSize, gridHeightSize] = gridSize;
  const gridItemWidth = (gridWidthSize - widthSpaceSize) / x;
  const gridItemHeight = (gridHeightSize - heightSpaceSize) / y;

  return [gridItemWidth, gridItemHeight];
}

/**
 * Widget이 차지하는 grid로 pixel 사이즈를 구하는 함수
 * @param widgetGrid Widget이 Grid index 영역을 차지하는 크기
 * @param gridItemSize GridItem의 너비와 높이
 * @param gap Grid의 gap 사이즈
 */
export function getWidgetSize(
  widgetGrid: [number, number],
  gridItemSize: [number, number],
  gap?: GridSpaceStyle["gap"]
): [number, number] {
  const [widgetWidthGrid, widgetHeightGrid] = widgetGrid;
  const [gridItemWidth, gridItemHeight] = gridItemSize;

  const [vGap, hGap] = pixelStringToNumbers(gap);

  const widgetWidthSize =
    widgetWidthGrid * gridItemWidth + (widgetWidthGrid - 1) * vGap;
  const heightWidthSize =
    widgetHeightGrid * gridItemHeight + (widgetHeightGrid - 1) * hGap;

  return [widgetWidthSize, heightWidthSize];
}

/**
 * 컨테이너로부터 offsetTop, offsetLeft를 계산해 주는 함수
 * @param gridCoordinate Grid 좌표
 * @param gridItemSize GridItem 크기
 * @param space Grid 여백
 * @returns
 */
export function getOffsetPixelCoordinateFromGrid(
  gridCoordinate: [number, number] = [0, 0],
  gridItemSize: [number, number],
  space: Partial<GridSpaceStyle>
): [number, number] {
  const [x, y] = gridCoordinate;
  const [gridItemWidth, gridItemHeight] = gridItemSize;
  const [vGap, hGap] = pixelStringToNumbers(space.gap);
  const paddings = pixelStringToNumbers(space.padding);

  return [
    gridItemWidth * x + vGap * x + paddings[3],
    gridItemHeight * y + hGap * y + paddings[0],
  ];
}

export function getCoordinateFromPixcel(
  pixcelCoordinate: [number, number],
  gridItemsDOMRect: GridItemDOMRect[]
): Coordinate | undefined {
  const [x, y] = pixcelCoordinate;

  const gridItemDOMRect = gridItemsDOMRect.find(({ rect }) => {
    const minX = rect.x;
    const maxX = rect.x + rect.width;
    const minY = rect.y;
    const maxY = rect.y + rect.height;

    return x > minX && x < maxX && y > minY && y < maxY;
  });

  if (gridItemDOMRect) {
    return {
      gridCoordinate: gridItemDOMRect.index,
      pixelCoordinate: [gridItemDOMRect.rect.x, gridItemDOMRect.rect.y],
    };
  }
}

export function getCoordinateFromGrid(
  gridCoordinate?: [number, number],
  gridItemsDOMRect?: GridItemDOMRect[]
): Coordinate | undefined {
  if (gridCoordinate && gridItemsDOMRect) {
    const [x, y] = gridCoordinate;

    const gridItemDOMRect = gridItemsDOMRect.find(({ index }) => {
      return index[0] === x && index[1] === y;
    });

    if (gridItemDOMRect) {
      return {
        gridCoordinate: gridItemDOMRect.index,
        pixelCoordinate: [gridItemDOMRect.rect.x, gridItemDOMRect.rect.y],
      };
    }
  }
}

export function validate(
  grid: [number, number],
  widgetGrid: [number, number],
  data: WidgetRegistInfo[],
  gridCoordinate?: [number, number]
) {
  const [v, h] = grid;
  const board = Array.from({ length: h }).map((_, y) => {
    return Array.from({ length: v }).map((_, x) => {
      let isValid = true;
      data.forEach(({ gridCoordinate, grid }) => {
        const [widgetX, widgetY] = gridCoordinate;
        const [width, height] = grid;

        if (
          x >= widgetX &&
          x < widgetX + width &&
          y >= widgetY &&
          y < widgetY + height
        ) {
          isValid = false;
        }
      });

      return isValid;
    });
  });

  if (gridCoordinate) {
    const [v, h] = widgetGrid;

    
    const isValid = [];

    
      for (let y = gridCoordinate[1]; y < gridCoordinate[1] + h; y++) {
        for (let x = gridCoordinate[0]; x < gridCoordinate[0] + v; x++) {
          try {
            isValid.push(board[y][x]);
          } catch {
            isValid.push(false);
          }
        }
      }
    
    
    
    return isValid.every((item) => item === true);
  }

  return false;
}
