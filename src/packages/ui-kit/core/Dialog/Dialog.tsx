import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

import { DialogComponent } from "./types";
import { DIALOG_DATA_ATTRIBUTE_NAME, DialogContext } from "./context";

import Body from "./Body";
import Trigger from "./Trigger";
import Dropdown from "./Dropdown";

import { Position } from "../util";

const Dialog: DialogComponent = ({ children }) => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    setId(v4());
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Trigger의 viewport 기준 좌표
  const [triggerRect, setTriggerRect] = useState<DOMRect>();

  // Trigger의 문서 기준 위치
  const [triggerPosition, setTriggerPosition] = useState<Position>({
    top: 0,
    left: 0,
  });

  /* 클릭한 Element가 bubble되는 동안 ID가 현재 dialog ID와 일치하면
  window click시 close Effect를 무효화 시키기 위한 로직이다.
  (stopPropagation 사용시 issue 있음) */
  const handleWindowClose = useCallback(
    (e: MouseEvent) => {
      const isTarget = e?.composedPath().some((target) => {
        const element = target as HTMLElement;
        const isElement = !!element.getAttribute;

        if (isElement) {
          return (
            (target as HTMLElement).getAttribute(DIALOG_DATA_ATTRIBUTE_NAME) ===
            id
          );
        } else {
          return false;
        }
      });

      if (!isTarget) {
        setIsOpen(false);
      }
    },
    [id]
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  // open handler (클릭 시 Trigger의 위치, 좌표 정보를 상태에 저장한다.)
  const handleOpen = (e?: React.MouseEvent<HTMLElement>) => {
    const target = e?.currentTarget;

    if (target) {
      setTriggerRect(target.getBoundingClientRect());
      setTriggerPosition({
        top: target.offsetTop,
        left: target.offsetLeft,
      });
    }

    setIsOpen(true);
  };

  const contextValue = {
    id,
    isOpen,
    triggerPosition,
    triggerRect,
    handleOpen,
    handleClose,
    handleWindowClose,
  };
  return (
    <DialogContext.Provider value={contextValue}>
      {children(contextValue)}
    </DialogContext.Provider>
  );
};

Dialog.Trigger = Trigger;
Dialog.Body = Body;
Dialog.Dropdown = Dropdown;

export default Dialog;
