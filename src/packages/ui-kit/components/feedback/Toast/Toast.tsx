import { forwardRef } from "react";

import { ToastProps } from "./types";
import ToastStyledComponents from "./styled";

const { Container } = ToastStyledComponents;

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ color = "black", size = "medium", message = "" }, ref) => {
    return (
      <Container ref={ref} theme={{ color, size }}>
        <span>{message}</span>
      </Container>
    );
  }
);

Toast.displayName = "Toast";

export default Toast;
