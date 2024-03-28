import { InputProps } from "../Input/types";

export interface SearchProps extends Omit<InputProps, "icon"| "type"> {
  onSearch: (value: string) => void;
}
