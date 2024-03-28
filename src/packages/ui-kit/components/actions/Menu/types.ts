export interface MenuOption {
  title?: string;
  value: string;
  isDisabled?: boolean,
}

export interface MenuProps {
  title: string;
  options: MenuOption[];
  defaultValue: string,
  name?: string,
  onChange?: (value: MenuOption["value"]) => void;
}
