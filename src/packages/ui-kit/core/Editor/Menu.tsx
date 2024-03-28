import { forwardRef, useContext } from "react";

import { MenuProps } from "./types";

import Context from "./context";
import EditorStyledComponents from "./styled";

import ToolPopup from "./ToolPopup";

import Dialog from "../Dialog";

const { MenuButton } = EditorStyledComponents;

const Menu = forwardRef<HTMLButtonElement, MenuProps>(({ onOpen }, ref) => {
  const { changeRow } = useContext(Context);

  return (
    <Dialog>
      {({ triggerRect, handleClose, isOpen, handleOpen }) => {
        return (
          <>
            <Dialog.Trigger>
              <MenuButton
                ref={ref}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isOpen) {
                    handleClose();
                  } else {
                    handleOpen();
                  }
                }}
              />
            </Dialog.Trigger>
            <Dialog.Body>
              <Dialog.Body.Popup
                handleClose={handleClose}
                triggerRect={triggerRect}
                quadrant
              >
                <ToolPopup
                  onOpen={onOpen}
                  onItemClick={(item) => {
                    changeRow(item);
                    handleClose();
                  }}
                />
              </Dialog.Body.Popup>
            </Dialog.Body>
          </>
        );
      }}
    </Dialog>
  );
});

export default Menu;
