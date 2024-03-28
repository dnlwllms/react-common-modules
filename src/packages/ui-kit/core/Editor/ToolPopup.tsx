import { forwardRef, useContext, useEffect } from "react";
import { ItemConfig, ToolPopupProps } from "./types";

import EditorStyledComponents from "./styled";
import Context from "./context";

const { ToolPopupContainer } = EditorStyledComponents;

const ToolPopup = forwardRef<HTMLDivElement, ToolPopupProps>(
  ({ onItemClick, onOpen }, ref) => {
    const { options } = useContext(Context);
    useEffect(() => {
      onOpen(true);
      return () => {
        onOpen(false);
      };
    }, [onOpen]);

    return (
      <ToolPopupContainer
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        onScroll={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
      >
        <ul>
          {options.items.map((item: ItemConfig, index: number) => {
            return (
              <li
                key={index}
                onClick={() => {
                  onItemClick(item);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </ToolPopupContainer>
    );
  }
);

export default ToolPopup;
