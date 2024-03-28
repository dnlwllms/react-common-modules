/*
 * - Tip
 * Size 혹은 사이즈라고 표시된 변수명, 함수, 주석 등은 실제 pixcel의 크기를 의미함
 * Grid 혹은 그리드라고 표시된 변수명, 함수, 주석 등은 Grid 컴포넌트의 index를 의미함
 */

import { ReactElement } from "react";

// --- WidgetUI Component Types

export type WidgetUIConfig = {
  /**
   *  n * n 격자 생성 시 필요한 최대 n값
   */
  grid: [number, number];

  /**
   * grid layout style
   */
  style?: Partial<GridSpaceStyle>;

  widgets: WidgetInfo[];
};

export interface WidgetUIProps {
  onDataChange: (widgetsRegistInfo: WidgetRegistInfo[]) => void;
  config: WidgetUIConfig;
  data: WidgetRegistInfo[];
}

// --- Reducer Types

export type WidgetUIReducerState = WidgetUIConfig & {
  /**
   * DOM에 렌더할 준비가 되었는지 확인을 위한 상태
   */
  isReady: boolean;

  /**
   * WidgetUI 너비
   */
  width: number;

  /**
   * WidgetUI 높이
   */
  height: number;

  /**
   * [width, height] GridItem 한 개의 크기
   */
  gridItemSize: [number, number];

  /**
   * widget을 수정할 수 있는 상태인지 여부
   */
  isEditMode: boolean;

  /**
   * GridItem의 DOMRect 정보
   */
  gridItemsDOMRect?: GridItemDOMRect[];

  selectedWidget?: WidgetRegistInfo;
  selectedNewWidget?: WidgetInfo;

  highlightInfo?: HighlightInfo;

  data: WidgetRegistInfo[];
};

type WidgetUIReducerConfig = {
  [key in keyof WidgetUIReducerActionTypeAndPayload]: {
    type: key;
    payload?: WidgetUIReducerActionTypeAndPayload[key];
  };
};

export type WidgetUIReducerActionTypeAndPayload = {
  /**
   * 1. typeof window를 통해 window 객체에 접근할 수 있는지 확인 (서버에서 호출 시 사용 불가능)
   * 2. viewport 설정 (부모 요소 기준으로 사이즈 적용)
   * 3. grid 영역 생성
   * 4. gridItem size 측정
   */
  init: {
    container: HTMLDivElement;
    config: WidgetUIConfig;
  };

  setEditMode: boolean;

  setGridItemsDOMRect: GridItemDOMRect[];

  setSelectedWidget: WidgetRegistInfo;

  setSelectedNewWidget: WidgetInfo;

  setHighlightInfo: HighlightInfo;

  addWidget: WidgetRegistInfo;

  removeWidget: string;

  editWidgetGridCoordinate: {
    id: string;
    gridCoordinate: Coordinate["gridCoordinate"];
  };
};

export type WidgetUIReducerAction =
  WidgetUIReducerConfig[keyof WidgetUIReducerActionTypeAndPayload];

// --- Common Types

export type Coordinate = {
  /**
   * [x, y] 2차원 배열 인덱스
   */
  gridCoordinate: [number, number];

  /**
   * [x, y] offsetLeft, offsetTop pixel 값
   */
  pixelCoordinate: [number, number];
};

export type GridSpaceStyle = {
  padding: string | number;
  gap: string | number;
};

export type WidgetRegistInfo = {
  id: string;
  componentKey: string;
  grid: [number, number];
  gridCoordinate: [number, number];
};

export type WidgetComponent = {
  key: string;
  element: ReactElement;
};

export type WidgetInfo = {
  grid: [number, number];
  component: WidgetComponent;
};

export type GridItemDOMRect = {
  index: [number, number];
  rect: DOMRect;
};

export type HighlightInfo = {
  size: [number, number];
  coordinate: Coordinate;
};
