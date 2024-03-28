import { FC } from "react";

import { SpinnerProps } from "./types";
import SpinnerStyledComponents from "./styled";

import { Player } from "@lottiefiles/react-lottie-player";

import SpinnerJson from "../../../lotties/Spinner.json";

const { Container } = SpinnerStyledComponents;

const Spinner: FC<SpinnerProps> = ({ size: sizeProps = "medium" }) => {
  let size = 40;
  switch (sizeProps) {
    case "small": {
      size = 24;
      break;
    }
    case "medium": {
      size = 40;
      break;
    }
    case "large": {
      size = 56;
      break;
    }
    default: {
      if (typeof sizeProps === "number") {
        size = sizeProps;
      }
    }
  }

  return (
    <Container theme={{ size }}>
      <Player src={SpinnerJson} loop autoplay />
    </Container>
  );
};

Spinner.displayName = "Spinner";

export default Spinner;
