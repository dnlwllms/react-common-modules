import _ from "lodash";

import { useCallback, useEffect, useMemo, useState } from "react";

import { CellectCoordinate, UseCellectConfig } from "./types";
import { getCellects } from "./util";

const useCellect = (config?: UseCellectConfig) => {
  const [selectedCells, setSelectedCells] = useState<CellectCoordinate[]>([]);
  const [isActive, setIsActive] = useState(false);

  const isFinished = useMemo(() => {
    return selectedCells.length > 0 && !isActive;
  }, [isActive, selectedCells.length]);

  const startPoint = useMemo(() => {
    if (selectedCells.length > 0) {
      return selectedCells[0];
    }
  }, [selectedCells]);

  const endPoint = useMemo(() => {
    if (selectedCells.length > 0) {
      return selectedCells[selectedCells.length - 1];
    }
  }, [selectedCells]);

  const handleMouseDown = (
    coordinate: CellectCoordinate,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setIsActive(true);
    setSelectedCells([coordinate]);
  };

  const handleMouseMove = useCallback(
    (coordinate: CellectCoordinate, e: React.MouseEvent) => {
      if (isActive && startPoint && !config?.isSingleOnly) {
        const newCellects = getCellects(startPoint, coordinate);

        setSelectedCells((prev) => {
          if (!_.isEqual(prev, newCellects)) {
            return newCellects;
          }
          return prev;
        });
      }
    },
    [config?.isSingleOnly, isActive, startPoint]
  );

  const handleMouseUp = useCallback(() => {
    if (isActive) {
      setIsActive(false);
      if (config?.onChange) {
        config?.onChange(selectedCells);
      }
    }
  }, [config, isActive, selectedCells]);

  const handleWindowMouseDown = useCallback(() => {
    if (selectedCells.length > 0) {
      setSelectedCells([]);
      if (config?.onChange) {
        config?.onChange([]);
      }
    }
  }, [config, selectedCells.length]);

  useEffect(() => {
    window.addEventListener("mousedown", handleWindowMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleWindowMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp, handleWindowMouseDown]);

  return {
    isActive,
    isFinished,

    startPoint,
    endPoint,
    selectedCells,

    handleMouseDown,
    handleMouseMove,
    handleWindowMouseDown,
  };
};

export default useCellect;
