import { FC } from "react";

import { ChipProps } from "./types";
import ChipStyledComponents from "./styled";

import CheckSVG from "./CheckSVG";

const { Container } = ChipStyledComponents;

const Chip: FC<ChipProps> = ({
  isSelected,
  isDisabled,
  size,
  hasTrailingIcon,
  children,
  onChange,
  ...props
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      if (onChange) {
        onChange(!isSelected);
      }
    }
  };

  return (
    <Container
      theme={{
        isSelected,
        isDisabled,
        size,
      }}
      onClick={handleClick}
      {...props}
    >
      <input
        type="checkbox"
        checked={isSelected}
        disabled={isDisabled}
        hidden
        onChange={({ target: { checked } }) => {
          if (onChange) {
            onChange(checked);
          }
        }}
      />
      {children}
      {hasTrailingIcon && isSelected && <CheckSVG />}
    </Container>
  );
};

Chip.displayName = "Chip";

export default Chip;
