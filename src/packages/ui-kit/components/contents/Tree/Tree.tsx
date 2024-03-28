import { FC, useState } from "react";

import TreeContext from "./context";
import { TreeProps } from "./types";
import TreeStyledComponents from "./styled";

import Branch from "./Branch";

const { TreeContainer } = TreeStyledComponents;

const Tree: FC<TreeProps> = ({
  iconType = "arrow",
  branches,
  selectedKeys = [],
  onClick,
  onSelect,
  isDraggable,
  children,
  isDisabledAutoSelect,
}) => {
  const [isOpenOnMount, setIsOpenOnMount] = useState(true);
  const [selectedBranchId, setSelectedBranchId] = useState<string>();

  const handleAllOpen = () => {
    setIsOpenOnMount(false);
    setTimeout(() => {
      setIsOpenOnMount(true);
    }, 0);
  };
  const handleAllClose = () => {
    setIsOpenOnMount(true);
    setTimeout(() => {
      setIsOpenOnMount(false);
    }, 0);
  };

  const contextValue = {
    iconType,
    selectedKeys,
    onClick,
    onSelect,
    isDraggable,
    handleAllOpen,
    handleAllClose,
    isOpen: isOpenOnMount,
    selectedBranchId,
    setSelectedBranchId,
    isDisabledAutoSelect,
  };

  return (
    <TreeContext.Provider value={contextValue}>
      {!!children && children(contextValue)}
      <TreeContainer>
        {branches.map(({ id, title, children, row }) => {
          return (
            <Branch
              key={id}
              id={id}
              title={title}
              children={children}
              row={row}
              isRoot
              isOpenOnMount={isOpenOnMount}
            />
          );
        })}
      </TreeContainer>
    </TreeContext.Provider>
  );
};

Tree.displayName = "Tree";

export default Tree;
