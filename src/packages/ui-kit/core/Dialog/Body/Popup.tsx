import {
  FC,
  useEffect,
  useRef,
  Fragment,
  cloneElement,
  useContext,
} from "react";

import { DialogBodyPopupProps } from "../types";
import { DialogContext } from "../context";

const Popup: FC<DialogBodyPopupProps> = ({
  triggerRect,
  positionOption,
  children,
  quadrant,
  handleClose,
}) => {
  const { handleWindowClose } = useContext(DialogContext);
  // 특정 이벤트시 Popup을 닫히게 하는 effect
  useEffect(() => {
    window.addEventListener("click", handleWindowClose);
    window.addEventListener("scroll", handleClose);
    return () => {
      window.removeEventListener("click", handleWindowClose);
      window.removeEventListener("scroll", handleClose);
    };
  }, [handleClose, handleWindowClose]);

  // 저장된 Trigger 위치 및 좌표 State로 Popup위치를 잡아주는 effect
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && triggerRect) {
      const current = ref.current as HTMLElement;
      const currentRect = current.getBoundingClientRect();

      const leftMargin = positionOption?.leftMargin || 0;
      const topMargin = positionOption?.topMargin || 0;

      current.style.position = "fixed";
      current.style.top = "0";
      current.style.left = "0";

      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;

      // 사분면 옵션이 있는 경우
      if (quadrant) {
        const isPositiveX = triggerRect.x >= innerWidth / 2;
        const isPositiveY = triggerRect.y <= innerHeight / 2;
        // 트리거가 1사분면에 위치한 경우
        if (isPositiveX && isPositiveY) {
          current.style.left = `${
            triggerRect.x + triggerRect.width - currentRect.width + leftMargin
          }px`;
          current.style.top = `${
            triggerRect.y + triggerRect.height + topMargin
          }px`;
          // 트리거가 2사분면에 위치한 경우
        } else if (!isPositiveX && isPositiveY) {
          current.style.left = `${triggerRect.x + leftMargin}px`;
          current.style.top = `${
            triggerRect.y + triggerRect.height + topMargin
          }px`;
          // 트리거가 3사분면에 위치한 경우
        } else if (!isPositiveX && !isPositiveY) {
          current.style.left = `${triggerRect.x + leftMargin}px`;
          current.style.top = `${
            triggerRect.y - currentRect.height - topMargin
          }px`;
          // 트리거가 4사분면에 위치한 경우
        } else if (isPositiveX && !isPositiveY) {
          current.style.left = `${
            triggerRect.x + triggerRect.width - currentRect.width + leftMargin
          }px`;
          current.style.top = `${
            triggerRect.y - currentRect.height - topMargin
          }px`;
        }
        // 일반 옵션인 경우
      } else {
        const isOverX = triggerRect.x + currentRect.width > innerWidth;
        const isOverY = triggerRect.y + currentRect.height > innerHeight;

        if (isOverX) {
          current.style.left = `${
            window.innerWidth - currentRect.width
          }px`;
        } else {
          current.style.left = `${triggerRect.x + leftMargin}px`;
        }

        if (isOverY) {
          current.style.top = `${
            window.innerHeight - currentRect.height
          }px`;
        } else {
          current.style.top = `${triggerRect.y + topMargin}px`;
        }
      }
    }
  }, [triggerRect, positionOption, quadrant]);

  return (
    <Fragment>
      {cloneElement(children, {
        ref,
        onClick: (e: MouseEvent) => {
          e.stopPropagation();
          if (children.props.onClick) {
            children.props.onClick(e);
          }
        },
        style: {
          ...children.props.style,
        },
      })}
    </Fragment>
  );
};

export default Popup;
