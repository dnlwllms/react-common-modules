import { FC } from "react";

import { CollapseProps } from "./types";
import { CollapseStyledComponents } from "./styled";

import CollapseContext from "./context";

import CollapseTitle from "./CollapseTitle";
import CollapseContent from "./CollapseContent";

import Dialog from "../../../core/Dialog";

const { Container } = CollapseStyledComponents;

const Collapse: FC<CollapseProps> = ({ size }) => {
  return (
    <CollapseContext.Provider
      value={{
        size,
      }}
    >
      <Container>
        <Dialog>
          {({ isOpen }) => (
            <>
              <Dialog.Trigger>
                <CollapseTitle isOpen={isOpen} />
              </Dialog.Trigger>
              <Dialog.Body>
                <CollapseContent />
              </Dialog.Body>
            </>
          )}
        </Dialog>
      </Container>
    </CollapseContext.Provider>
  );
};

Collapse.displayName = "Collapse";

export default Collapse;
