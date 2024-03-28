import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import Context from "./context";
import EditorStyledComponents from "./styled";

import { ItemConfig, EditorProps, RowConfig } from "./types";

import Row from "./Row";
import useRevert from "./useRevert";

const { Container } = EditorStyledComponents;

const Editor: FC<EditorProps> = ({ initialRows, options, onSubmit }) => {
  const ref = useRef<HTMLDivElement>(null);

  const defaultItem =
    options.items.find(({ isDefault }) => isDefault) || options.items[0];

  const [clientRows, setClientRows] = useState<RowConfig[]>(
    initialRows || [
      {
        index: 0,
        id: uuidv4(),
        item: defaultItem,
        props: defaultItem.component.props,
      },
    ]
  );
  useEffect(() => {
    if (initialRows) {
      setClientRows(initialRows);
    }
  }, [initialRows]);

  const [selectedRow, setSelectedRow] = useState<RowConfig>();

  const { current, add, handlePrev, handleNext } = useRevert<RowConfig[]>(
    clientRows,
    onSubmit
  );

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "z": {
          e.preventDefault();

          if (e.shiftKey) {
            handleNext();
          } else {
            handlePrev();
          }

          break;
        }
      }
    },
    [handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  const createRow = () => {
    setClientRows(() => {
      const copy = _.cloneDeep(current);
      const index = copy.findIndex(({ id }) => id === selectedRow?.id);
      if (index > -1) {
        const row = {
          index: index + 1,
          id: uuidv4(),
          item: defaultItem,
          props: defaultItem.component.props,
        };

        copy.splice(index + 1, 0, row);
      }

      add(copy);

      return [...copy];
    });
  };

  const changeRow = (item: ItemConfig) => {
    if (selectedRow) {
      setClientRows(() => {
        const copy = _.cloneDeep(current);
        const index = copy.findIndex(({ id }) => id === selectedRow?.id);
        copy[index].item = item;
        copy[index].props = item.component.props;

        add(copy);

        return [...copy];
      });
    }
  };

  const deleteRow = () => {
    if (current.length > 1) {
      setClientRows(() => {
        const copy = _.cloneDeep(current).filter(
          ({ id }) => id !== selectedRow?.id
        );

        add(copy);

        return [...copy];
      });
    }
  };

  const saveProps = (rowId: string, props: any) => {
    setClientRows(() => {
      const copy = _.cloneDeep(current);
      const rowIndex = copy.findIndex((row) => row.id === rowId);
      if (rowIndex > -1) {
        copy[rowIndex].props = props;
      }

      add(copy);

      return [...copy];
    });
  };

  return (
    <Context.Provider
      value={{
        options,

        selectedRow,
        setSelectedRow,

        createRow,
        changeRow,
        deleteRow,
        saveProps,

        handleKeydown,
      }}
    >
      <Container ref={ref}>
        {current.map((row) => {
          return <Row key={row.id} config={row} />;
        })}
      </Container>
    </Context.Provider>
  );
};

export default Editor;
