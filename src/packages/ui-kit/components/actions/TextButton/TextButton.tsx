import { FC } from "react";

import { TextButtonProps } from "./types";
import TextButtonStyledComponents from "./styled";

const { StyledButton, IconArea } = TextButtonStyledComponents;

const TextButton: FC<TextButtonProps> = ({
  icon,
  children,
  isDisabled,
  size,
  hasUnderline,
  ...props
}) => {
  const renderChildren = () => {
    const items = [];
    if (icon) {
      if (icon.position === "trailing") {
        items.push(
          <span key={0}>{children}</span>,
          <IconArea key={1}>{icon.node}</IconArea>
        );
      } else if (icon.position === "leading") {
        items.push(
          <IconArea key={0}>{icon.node}</IconArea>,
          <span key={1}>{children}</span>
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
      theme={{ size, isDisabled, hasUnderline }}
      disabled={isDisabled}
      {...props}
    >
      <span>{renderChildren()}</span>
    </StyledButton>
  );
};

TextButton.displayName = "TextButton";

export default TextButton;
