import { FC, useCallback, useState } from "react";

import { SelectableTableProps } from "./types";
import SelectableTableStyledComponents from "./styled";
import SelectableTableContext from "./context";

import MainTable from "./MainTable";
import VirtualTable from "./VirtualTable";

const { Container } = SelectableTableStyledComponents;

const SelectableTable: FC<SelectableTableProps> = (props) => {
  const [selectedPoints, setSelectedPoints] = useState<[number, number][]>([]);

  const handleSelect = useCallback((selectedPoints: [number, number][]) => {
    setSelectedPoints(selectedPoints);
  }, []);

  return (
    <SelectableTableContext.Provider value={props}>
      <Container>
        <MainTable onSelect={handleSelect} />
        <VirtualTable selectedPoints={selectedPoints} />
      </Container>
    </SelectableTableContext.Provider>
  );
};

export default SelectableTable;
