import { FC, useContext } from "react";

import { HeaderProps } from "./types";
import HeaderStyledComponents from "./styled";
import ModalContext from "../context";
import CloseSVG from "./CloseSVG";

const { Container } = HeaderStyledComponents;

const Header: FC<HeaderProps> = ({
  title = "Title",
  hideCloseButton,
  onClose,
}) => {
  const { size } = useContext(ModalContext);

  return (
    <Container theme={{ size }}>
      <h2>{title}</h2>
      {!hideCloseButton && (
        <span onClick={onClose}>
          <CloseSVG />
        </span>
      )}
    </Container>
  );
};

export default Header;
