import { FC } from "react";

import { DropdownProps } from "./types";
import DropdownStyledComponents from "./styled";

import { colors } from "../../../foundations";
import { DownSVG } from "../../../icons/outlined/arrows";

const { Container, StyledSelect, SVGContainer } = DropdownStyledComponents;

const Dropdown: FC<DropdownProps> = ({
  size = "medium",
  value = "",
  options = [],
  onChange,

  isDisabled,
  zIndex,
  ...props
}) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Container {...props}>
      <SVGContainer theme={{ size }}>
        <DownSVG {...(isDisabled && { fill: colors.gray200 })} />
      </SVGContainer>
      <StyledSelect
        theme={{
          size,
        }}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={isDisabled}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.title || option.value}
            </option>
          );
        })}
      </StyledSelect>
    </Container>
  );
};

Dropdown.displayName = "Dropdown";

export default Dropdown;
