import { FC } from "react";

import { AlertProps } from "./types";
import { IconButton } from "../../actions";
import { CloseSmallSVG } from "../../../icons/outlined/character";
import AlertStyledComponents from "./styled";

const { Container, Header, Body, Footer, AlertButton } = AlertStyledComponents;

const Alert: FC<AlertProps> = ({
  alertType = "error",
  title,
  description,
  buttonLabel,
  onButtonClick,
  onCloseClick,
}) => {
  return (
    <Container theme={{ alertType }}>
      <Header>
        <h4>{title}</h4>
        <IconButton
          icon={<CloseSmallSVG width={24} height={24} />}
          onClick={onCloseClick}
        />
      </Header>
      <Body>{description}</Body>
      <Footer>
        <AlertButton theme={{ alertType }} size="small" onClick={onButtonClick}>
          {buttonLabel}
        </AlertButton>
      </Footer>
    </Container>
  );
};

Alert.displayName = "Alert";

export default Alert;
