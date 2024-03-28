import { FC } from "react";

import { CheckboxProps } from "./types";
import CheckboxStyledComponents from "./styled";

import CheckSVG from "./CheckSVG";

const { Container, CheckArea, Label } = CheckboxStyledComponents;

const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  isDisabled,
  onChange,
  label,
  size = "small",
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      if (onChange) {
        onChange(!isChecked);
      }
    }
  };

  return (
    <Container onClick={onClick}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        hidden
        onChange={({ target: { checked } }) => {
          if (onChange) {
            onChange(checked);
          }
        }}
        {...props}
      />
      <div>
        <Label htmlFor={props.id} theme={{ size, isDisabled }}>
          {label}
        </Label>
        <CheckArea
          theme={{
            size,
            isChecked,
            isDisabled,
          }}
          onClick={handleClick}
        >
          {isChecked && <CheckSVG />}
        </CheckArea>
      </div>
    </Container>
  );
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
