import { FC } from "react";

import { EmptyProps } from "./types";
import EmptyStyledComponents from "./styled";

import { AttentionSVG } from "../../../icons/outlined/character";

const { Container } = EmptyStyledComponents;

const Empty: FC<EmptyProps> = ({
  icon,
  description,
  size = "medium",
  ...props
}) => {
  return (
    <Container theme={{ size }} {...props}>
      {icon !== undefined ? icon : <AttentionSVG fill="#999" />}
      <p>{description}</p>
    </Container>
  );
};

export default Empty;
