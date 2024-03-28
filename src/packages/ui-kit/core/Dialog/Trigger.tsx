import { cloneElement, FC, useContext } from "react";
import { DialogTriggerProps } from "./types";
import { DIALOG_DATA_ATTRIBUTE_NAME, DialogContext } from "./context";

const Trigger: FC<DialogTriggerProps> = ({ children, disabled, action }) => {
  const { id, isOpen, handleOpen, handleClose } = useContext(DialogContext);
  const injectAction = () => {
    switch (action) {
      case "custom": {
        return {};
      }
      case "hover": {
        return {
          onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
            if (!disabled && !isOpen) {
              handleOpen(e);
            }
            if (children.props.onMouseEnter) {
              children.props.onMouseEnter(e);
            }
          },
          onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
            handleClose();
            if (children.props.onMouseLeave) {
              children.props.onMouseLeave(e);
            }
          },
        };
      }
      case "click":
      default: {
        return {
          onClick: (e: React.MouseEvent<HTMLElement>) => {
            if (!disabled) {
              handleOpen(e);
            }

            if (children.props.onClick) {
              children.props.onClick(e);
            }
          },
        };
      }
    }
  };

  return cloneElement(children, {
    [DIALOG_DATA_ATTRIBUTE_NAME]: id,
    ...injectAction(),
  });
};

export default Trigger;
