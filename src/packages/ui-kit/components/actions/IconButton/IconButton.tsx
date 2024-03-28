import { FC } from "react";

import { IconButtonProps } from "./types";
import IconButtonStyledComponents from "./styled";

const { StyledButton } = IconButtonStyledComponents;

const IconButton: FC<IconButtonProps> = ({
  icon,
  isDisabled,
  size = "medium",
  ...props
}) => {
  return (
    <StyledButton size={size} disabled={isDisabled} type="button" {...props}>
      {icon}
    </StyledButton>
  );
};

IconButton.displayName = "IconButton";

export default IconButton;
