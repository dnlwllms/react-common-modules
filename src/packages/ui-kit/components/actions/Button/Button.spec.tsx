import { FC } from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ButtonProps } from "./types";

import { colors, typography } from "../../../foundations";

import Button from "./Button";

const TestButton: FC<ButtonProps> = (props) => {
  return <Button {...props}>Button</Button>;
};

describe("Button Component", () => {
  it("UI Test - Default", async () => {
    render(<TestButton data-testid="button" />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      ${typography.body02M}
      background: ${colors.primary500};
      color: ${colors.white};
      height: 40px;
      padding: 0 24px;
      border-radius: 6px;
      cursor: pointer;
    `);
  });

  it("UI Test - X-Small Size", async () => {
    render(<TestButton data-testid="button" size="x-small" />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      ${typography.body03R}
      height: 24px;
      padding: 0 8px;
      border-radius: 4px;
    `);
  });

  it("UI Test - Small Size", async () => {
    render(<TestButton data-testid="button" size="small" />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      ${typography.body02M}
      height: 32px;
      padding: 0 16px;
      border-radius: 4px;
    `);
  });

  it("UI Test - Medium Size", async () => {
    render(<TestButton data-testid="button" size="medium" />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      ${typography.body02M}
      height: 40px;
      padding: 0 24px;
      border-radius: 6px;
    `);
  });

  it("UI Test - Large Size", async () => {
    render(<TestButton data-testid="button" size="large" />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      ${typography.body01M}
      height: 48px;
      padding: 0 32px;
      border-radius: 8px;
    `);
  });

  it("UI Test - X-Large Size", async () => {
    render(<TestButton data-testid="button" size="x-large" />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      ${typography.body01B}
      height: 56px;
      padding: 0 40px;
      border-radius: 8px;
    `);
  });

  it("UI Test - Disabled", async () => {
    render(<TestButton data-testid="button" isDisabled />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      cursor: default;
    `);
  });

  it("UI Test - Capsule", async () => {
    render(<TestButton data-testid="button" isCapsule />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      border-radius: 100px;
    `);
  });

  it("UI Test - Block", async () => {
    render(<TestButton data-testid="button" isBlock />);

    const button = await screen.findByTestId<HTMLButtonElement>("button");

    expect(button).toBeInTheDocument();
    expect(await screen.findByText("Button")).toBeInTheDocument();

    expect(button).toHaveStyle(`
      width: 100%;
    `);
  });
});
