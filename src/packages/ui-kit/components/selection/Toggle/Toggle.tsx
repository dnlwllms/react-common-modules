import { FC } from "react";

import { ToggleProps } from "./types";
import ToggleStyledComponents from "./styled";

const { Container, SwitchContainer, Point } = ToggleStyledComponents;

const Toggle: FC<ToggleProps> = ({ isOn, onChange, ...props }) => {
  const handleClick = () => {
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <Container>
      <input
        type="checkbox"
        checked={isOn}
        hidden
        onChange={({ target: { checked } }) => {
          if (onChange) {
            onChange(checked);
          }
        }}
        {...props}
      />
      <SwitchContainer theme={{ isOn }} onClick={handleClick}>
        <Point />
      </SwitchContainer>
    </Container>
  );
};

Toggle.displayName = "Toggle";

export default Toggle;
