import { FC, Fragment } from "react";

import { ButtonProps } from "./types";
import { ButtonStyledComponent } from "./styled";

const { StyledButton } = ButtonStyledComponent;

const Button: FC<ButtonProps> = ({
  icon,
  children,
  color,
  isDisabled,
  isCapsule,
  isBlock,
  size,
  ...props
}) => {
  const renderChildren = () => {
    const items = [];
    if (icon) {
      if (icon.position === "leading") {
        items.push(
          <Fragment key={0}>{icon.node}</Fragment>,
          <Fragment key={1}>{children}</Fragment>
        );
      } else if (icon.position === "trailing") {
        items.push(
          <Fragment key={0}>{children}</Fragment>,
          <Fragment key={1}>{icon.node}</Fragment>
        );
      }
    } else {
      items.push(children);
    }

    return items;
  };

  return (
    <StyledButton
      type="button"
      disabled={isDisabled}
      theme={{ color, size, isDisabled, isCapsule, isBlock }}
      {...props}
    >
      {renderChildren()}
    </StyledButton>
  );
};

Button.displayName = "Button";

export default Button;
