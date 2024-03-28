import { FC, useState } from "react";

import { MenuProps } from "./types";
import { RadioButton } from "../../selection";
import MenuStyledComponents from "./styled";

const { Container, Title, List } = MenuStyledComponents;

const Menu: FC<MenuProps> = ({
  title,
  options,
  name,
  defaultValue = "",
  onChange,
}) => {
  const [radioState, setRadioState] = useState(defaultValue);

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }

    setRadioState(value);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {options.map((item) => {
          return (
            <li key={item.value}>
              <RadioButton
                isChecked={radioState === item.value}
                id={item.value}
                label={item.title || item.value}
                name={name}
                isDisabled={item.isDisabled}
                onChange={() => handleChange(item.value)}
              />
            </li>
          );
        })}
      </List>
    </Container>
  );
};

Menu.displayName = "Menu";

export default Menu;
