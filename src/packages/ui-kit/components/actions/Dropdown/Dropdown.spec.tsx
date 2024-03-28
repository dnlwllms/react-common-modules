import { FC, useState } from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DropdownProps } from "./types";

import Dropdown from "./Dropdown";

const options = [
  {
    value: "선택",
  },
  {
    value: "first option",
  },
  {
    value: "second option",
  },
];

const TestDropdown: FC<Partial<DropdownProps>> = (props) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

  return (
    <Dropdown
      options={options}
      value={selectedValue}
      onChange={(value) => setSelectedValue(value.toString())}
      {...props}
    />
  );
};

describe("Dropdown Component", () => {
  it("UI Test - 클릭 시 옵션 창이 잘 나오는지", async () => {
    render(<TestDropdown data-testid="dropdown" />);

    const dropdown = await screen.findByTestId<HTMLButtonElement>("dropdown");

    expect(dropdown).toBeInTheDocument();

    userEvent.click(dropdown);

    options.forEach(async (option) => {
      expect(await screen.findByText(option.value)).toBeInTheDocument();
    });
  });

  it("UI Test - 옵션 클릭 시 옵션 값이 잘 입력 되었는지", async () => {
    render(<TestDropdown data-testid="dropdown" />);

    const dropdown = await screen.findByTestId<HTMLButtonElement>("dropdown");

    userEvent.click(dropdown);

    const firstOption = await screen.findByText("first option");

    userEvent.click(firstOption);

    expect(dropdown).toHaveTextContent("first option");

    userEvent.click(dropdown);

    const secondOption = await screen.findByText("second option");
    userEvent.click(secondOption);

    expect(dropdown).toHaveTextContent("second option");
  });
});
