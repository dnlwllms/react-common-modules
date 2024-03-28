import { FC, ReactElement } from "react";

import Trigger from "./Trigger";
import Popup from "./Body/Popup";
import Dropdown from "./Dropdown";

import { MovePositionOption, Position } from "../util";

export interface DialogContextValue {
  id?: string;
  isOpen: boolean;
  triggerRect?: DOMRect;
  triggerPosition: Position;
  handleOpen: (e?: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  handleWindowClose: (e: MouseEvent) => void;
}

// Dialog 내장 컴포넌트
export type InternalDialog = {
  Trigger: typeof Trigger;
  Body: DialogBodyComponent;
  Dropdown: typeof Dropdown;
};

// Dialog.Body 내장 컴포넌트
export type InternalDialogBody = {
  Popup: typeof Popup;
};

// Dialog 컴포넌트와 props 인터페이스
export interface DialogProps {
  children: (context: DialogContextValue) => ReactElement;
}
export interface DialogComponent extends FC<DialogProps>, InternalDialog {}

// Dialog.Trigger props 인터페이스
export interface DialogTriggerProps {
  children: ReactElement;
  disabled?: boolean;
  /**
   * - click: 클릭 시 대화상자가 나옴(모달, 콤보박스)
   * - hover: 마우스 호버 시 대화상자가 나옴(툴팁)
   * - hover-fix: 호버 시 대화상자가 나오고 고정됨(마커 오버레이)
   * @default "click"
   */
  action?: "click" | "hover" | "custom";
}

// Dialog.Body 컴포넌트와 props 인터페이스
export interface DialogBodyProps {
  children: ReactElement;
}
export interface DialogBodyComponent
  extends FC<DialogBodyProps>,
    InternalDialogBody {}

// Dialog.Body.Popup props 인터페이스
export interface DialogBodyPopupProps {
  children: ReactElement;
  triggerRect?: DOMRect;
  positionOption?: MovePositionOption;
  handleClose: () => void;
  /**
   * trigger의 위치가 viewport의 어느 사분면에 있는지에 따라 팝업 렌더 위치를 자동 조절해주는 옵션
   */
  quadrant?: boolean;
}

export interface DialogDropdownProps {
  children: ReactElement;
  margin?: number;
}
