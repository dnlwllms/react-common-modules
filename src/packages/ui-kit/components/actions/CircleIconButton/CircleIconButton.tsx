import { FC } from "react";

import CircleIconButtonStyledComponents from "./styled";
import { CircleIconButtonProps } from "./types";

const { StyledButton } = CircleIconButtonStyledComponents;

const CircleIconButton: FC<CircleIconButtonProps> = ({
  isActive,
  ...props
}) => {
  return <StyledButton theme={{ isActive }} {...props} />;
};

CircleIconButton.displayName = "CircleIconButton";

export default CircleIconButton;
