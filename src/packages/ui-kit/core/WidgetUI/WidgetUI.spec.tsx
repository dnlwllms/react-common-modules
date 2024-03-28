import { render } from "@testing-library/react";

import { GridSpaceStyle } from "./types";
import { getGridItemSize, getWidgetSize, pixelStringToNumbers } from "./utils";

import WidgetUI from "./WidgetUI";

describe.skip("WidgetUI", () => {
  it("render", () => {
    render(
      <WidgetUI
        data={[]}
        onDataChange={() => {}}
        config={{
          grid: [16, 8],
          widgets: [],
        }}
      />
    );
  });
});

describe("[Util Function Test] pixelStringToNumbers", () => {
  it("인자로 숫자 타입을 받는 경우", () => {
    Array(100)
      .fill(null)
      .forEach(() => {
        const randomInt = Math.floor(Math.random() * 100);

        expect(
          pixelStringToNumbers(randomInt).every((value) => value === randomInt)
        ).toBe(true);
      });
  });

  it("인자로 문자 타입을 받는 경우", () => {
    Array(100)
      .fill(null)
      .forEach(() => {
        const randomInt = Math.floor(Math.random() * 100);

        expect(
          pixelStringToNumbers(`${randomInt}px`).every(
            (value) => value === randomInt
          )
        ).toBe(true);

        const test = pixelStringToNumbers(`${randomInt}px ${randomInt + 1}px`);
        expect(test[0]).toBe(randomInt);
        expect(test[1]).toBe(randomInt + 1);
        expect(test[2]).toBe(randomInt);
        expect(test[3]).toBe(randomInt + 1);
      });
  });

  it("인자로 문자 타입을 받는 경우 - 세로와 가로 패딩이 다른 경우", () => {
    Array(100)
      .fill(null)
      .forEach(() => {
        const randomInt = Math.floor(Math.random() * 100);

        const test = pixelStringToNumbers(`${randomInt}px ${randomInt + 1}px`);
        expect(test[0]).toBe(randomInt);
        expect(test[1]).toBe(randomInt + 1);
        expect(test[2]).toBe(randomInt);
        expect(test[3]).toBe(randomInt + 1);
      });
  });
});

describe("[Util Function Test] getGridItemSize", () => {
  const gridWidth = 1920;
  const gridHeight = 1080;
  const gridSize: [number, number] = [gridWidth, gridHeight];
  const grid: [number, number] = [16, 8];

  it("gap, padding이 0인 경우", () => {
    const space: GridSpaceStyle = {
      padding: 0,
      gap: 0,
    };

    const [gridItemWidth, gridItemHeight] = getGridItemSize(
      gridSize,
      space,
      grid
    );

    expect(gridItemWidth).toBe(gridWidth / grid[0]);
    expect(gridItemHeight).toBe(gridHeight / grid[1]);
  });

  it("padding이 0이 아닌 경우", () => {
    const space: GridSpaceStyle = {
      padding: 16,
      gap: 0,
    };

    const [gridItemWidth, gridItemHeight] = getGridItemSize(
      gridSize,
      space,
      grid
    );

    const padding =
      typeof space.padding === "number"
        ? space.padding
        : parseInt(space.padding);

    expect(gridItemWidth).toBe((gridWidth - padding * 2) / grid[0]);
    expect(gridItemHeight).toBe((gridHeight - padding * 2) / grid[1]);
  });

  it("gap, padding이 0이 아닌 경우", () => {
    const space: GridSpaceStyle = {
      padding: 16,
      gap: 8,
    };

    const [gridItemWidth, gridItemHeight] = getGridItemSize(
      gridSize,
      space,
      grid
    );

    const padding =
      typeof space.padding === "number"
        ? space.padding
        : parseInt(space.padding);

    const gap = typeof space.gap === "number" ? space.gap : parseInt(space.gap);

    expect(gridItemWidth).toBe(
      (gridWidth - padding * 2 - gap * (grid[0] - 1)) / grid[0]
    );
    expect(gridItemHeight).toBe(
      (gridHeight - padding * 2 - gap * (grid[1] - 1)) / grid[1]
    );
  });
});

/*
 * WG: Widget의 Grid index 영역을 차지하는 크기
 * GIS: GridItem 사이즈
 * GS: gap 사이즈
 */
describe("[Util Function Test] getWidgetSize", () => {
  it("WG(2 * 2), GIS(60 * 60), GS(8, 8)인 경우", () => {
    const widgetGrid: [number, number] = [2, 2];
    const gridItemSize: [number, number] = [60, 60];
    const gap = "8px";

    const [widgetWidth, widgetHeight] = getWidgetSize(
      widgetGrid,
      gridItemSize,
      gap
    );

    expect(widgetWidth).toBe(128);
    expect(widgetHeight).toBe(128);
  });
});
