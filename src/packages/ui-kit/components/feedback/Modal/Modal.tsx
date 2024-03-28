import { ModalComponent } from "./types";
import ModalStyledComponents from "./styled";

import Header from "./Header";
import Footer from "./Footer";
import ModalContext from "./context";
import Body from "./Body";

const { Container } = ModalStyledComponents;

const Modal: ModalComponent = ({ children, size }) => {
  return (
    <ModalContext.Provider
      value={{
        size,
      }}
    >
      <Container theme={{ size }}>{children}</Container>
    </ModalContext.Provider>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.displayName = "Modal";

export default Modal;
