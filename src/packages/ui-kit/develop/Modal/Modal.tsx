import { FC } from "react";

import { ModalProps } from "./types";
import ModalStyledComponents from "./styled";

import { Modal as RDSModal } from "../../components/feedback";

const { Container, Dim, StyledModal } = ModalStyledComponents;

const Modal: FC<ModalProps> = ({
  primary,
  secondary,
  children,
  size,
  title,
  onClose,
}) => {
  return (
    <Container>
      <Dim onClick={onClose} />
      <StyledModal>
        <RDSModal size={size}>
          <>
            <RDSModal.Header onClose={onClose} title={title} />
            <RDSModal.Body>{children}</RDSModal.Body>
            <RDSModal.Footer primary={primary} secondary={secondary} />
          </>
        </RDSModal>
      </StyledModal>
    </Container>
  );
};

export default Modal;
