import { FC } from "react";

import { RadioButtonProps } from "./types";
import RadioButtonStyledComponents from "./styled";

import RoundSVG from "./RoundSVG";

const { CheckArea, Container, Label } = RadioButtonStyledComponents;

const RadioButton: FC<RadioButtonProps> = ({
  isChecked,
  isDisabled,
  label,
  size = "small",
  onChange,
  ...props
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      if (onChange) {
        onChange(true);
      }
    }
  };

  return (
    <Container>
      <input
        type="radio"
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
        <Label
          theme={{
            size,
            isChecked,
            isDisabled,
          }}
          htmlFor={props.id}
        >
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
          {isChecked && <RoundSVG />}
        </CheckArea>
      </div>
    </Container>
  );
};

RadioButton.displayName = "RadioButton";

export default RadioButton;
