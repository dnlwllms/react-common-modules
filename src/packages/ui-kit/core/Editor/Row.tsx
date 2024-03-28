import { FC, cloneElement, useContext, useState } from "react";

import { EditorOptions, RowProps } from "./types";
import Context from "./context";
import EditorStyledComponents from "./styled";

import Menu from "./Menu";
import EditModal from "./EditModal";

import Dialog from "../Dialog";

const { RowContainer, PlusButton, MinusButton, RowButtonGroup } =
  EditorStyledComponents;

const Row: FC<RowProps> = ({ config }) => {
  const { selectedRow, setSelectedRow, createRow, deleteRow, options } =
    useContext(Context);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const component = (options as EditorOptions).items.find(
    ({ title }) => title === config.item.title
  )?.component;

  return (
    <Dialog>
      {({ handleOpen, handleClose }) => {
        config.open = handleOpen;
        config.close = handleClose;

        return (
          <>
            <Dialog.Trigger>
              <RowContainer
                id={config.id}
                onMouseEnter={() => {
                  setSelectedRow(config);
                }}
                onMouseLeave={() => {
                  if (!isMenuOpen) {
                    setSelectedRow(undefined);
                  }
                }}
              >
                <RowButtonGroup visible={selectedRow?.id === config.id}>
                  <MinusButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteRow();
                    }}
                  />
                  <PlusButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      createRow();
                    }}
                  />
                  <Menu onOpen={setIsMenuOpen} />
                </RowButtonGroup>
                {component && cloneElement(component, config.props)}
              </RowContainer>
            </Dialog.Trigger>
            <Dialog.Body>
              <EditModal config={config} />
            </Dialog.Body>
          </>
        );
      }}
    </Dialog>
  );
};

export default Row;
