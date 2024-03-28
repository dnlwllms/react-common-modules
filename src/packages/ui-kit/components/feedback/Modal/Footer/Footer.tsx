import { FC, useContext, useMemo } from "react";

import { FooterProps } from "./types";
import FooterStyledComponents from "./styled";
import ModalContext from "../context";
import { Button } from "../../../actions";
import { ButtonSize } from "../../../actions/Button/types";

const { Container, ButtonGroup } = FooterStyledComponents;

const Footer: FC<FooterProps> = ({ primary, secondary }) => {
  const { size } = useContext(ModalContext);

  const buttonSize = useMemo<ButtonSize>(() => {
    switch (size) {
      case "large":
        return "large";
      case "x-large":
        return "x-large";
      case "medium":
      default: {
        return "medium";
      }
    }
  }, [size]);

  return (
    <Container theme={{ size }}>
      <ButtonGroup theme={{ size }}>
        <Button
          size={buttonSize}
          color="gray01"
          onClick={primary.onClick}
          isBlock
          isDisabled={primary.isDisabled}
        >
          {primary.title}
        </Button>

        {secondary && (
          <Button
            size={buttonSize}
            color={"gray02"}
            onClick={secondary.onClick}
            isBlock
            isDisabled={secondary.isDisabled}
          >
            {secondary.title}
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default Footer;
