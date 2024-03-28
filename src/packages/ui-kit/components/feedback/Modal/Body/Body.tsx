import { FC, useContext } from "react";

import { BodyProps } from "./types";
import BodyStyledComponents from "./styled";
import ModalContext from "../context";

const { Container } = BodyStyledComponents;

const Body: FC<BodyProps> = ({ children }) => {
  const { size } = useContext(ModalContext);

  return <Container theme={{ size }}>{children}</Container>;
};

export default Body;
