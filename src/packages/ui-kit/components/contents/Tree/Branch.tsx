import { FC, Fragment, useContext, useEffect } from "react";
import TreeContext from "./context";
import { BranchProps, BranchType } from "./types";
import TreeStyledComponents from "./styled";

import { Accordion } from "../../../core";

import { Checkbox } from "../../selection";

import { DownOneSVG } from "../../../icons/filled/arrows";

import { FolderCloseSVG, FolderOpenSVG } from "../../../icons/outlined/books";
import { AddSVG, ReduceSVG } from "../../../icons/outlined/character";
import { FileSVG } from "../../../icons/outlined/office";

const {
  BranchContainer,
  BranchRow,
  StyledIconButton,
  StyledArrowIconButton,
  LeafArea,
} = TreeStyledComponents;

const Branch: FC<BranchProps> = ({
  id,
  title,
  children,
  row,
  isRoot,
  isOpenOnMount,
  ...props
}) => {
  const {
    iconType,
    onSelect,
    selectedKeys,
    onClick,
    selectedBranchId,
    setSelectedBranchId,
    isDisabledAutoSelect,
  } = useContext(TreeContext);

  useEffect(() => {
    if (!isDisabledAutoSelect && children && onSelect) {
      const isAllChildrenSelected = children.every(({ id }) =>
        selectedKeys.includes(id)
      );

      // 하위 요소가 모두 체크가 되어있고 해당 브랜치가 체크가 안되어 있는 경우 해당 브랜치 체크
      if (
        children.length > 0 &&
        isAllChildrenSelected &&
        !selectedKeys.includes(id)
      ) {
        onSelect([...selectedKeys, id], id, row);
      }
      // 하위 요소가 모두 체크가 되어있지 않은데 해당 브랜치가 체크가 되어 있는 경우 해당 브랜치 체크 해제
      else if (!isAllChildrenSelected && selectedKeys.includes(id)) {
        onSelect(
          selectedKeys.filter((key) => key !== id),
          id,
          row
        );
      }
    }
  }, [children, id, isDisabledAutoSelect, onSelect, row, selectedKeys]);

  const handleSelect = (branch: BranchType) => {
    const keys: string[] = [];

    const getAllChildrenKeys = (branch: BranchType) => {
      if (branch.children && branch.children.length > 0) {
        branch.children.forEach((child) => {
          getAllChildrenKeys(child);
        });
      }

      keys.push(branch.id);
    };

    if (!isDisabledAutoSelect) {
      getAllChildrenKeys(branch);
    } else {
      keys.push(branch.id);
    }

    const hasKey = selectedKeys.includes(branch.id);

    let newKeys = selectedKeys.concat();

    if (hasKey) {
      newKeys = newKeys.filter((selectedKey) => !keys.includes(selectedKey));
    } else {
      keys.forEach((key) => {
        if (!newKeys.includes(key)) {
          newKeys = newKeys.concat(key);
        }
      });
    }

    if (onSelect) {
      onSelect(newKeys, id, row);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (setSelectedBranchId) {
      setSelectedBranchId(id);
    }

    if (onClick) {
      onClick({ id, title, children, row });
    }
  };

  const renderIcon = (isOpen: boolean) => {
    const hasChildren = children && children.length > 0;

    switch (iconType) {
      case "character": {
        return isOpen ? (
          <StyledIconButton size="small" icon={hasChildren && <ReduceSVG />} />
        ) : (
          <StyledIconButton size="small" icon={hasChildren && <AddSVG />} />
        );
      }
      case "arrow":
      default: {
        return (
          <StyledArrowIconButton
            theme={{
              isOpen,
            }}
            size="small"
            icon={hasChildren && <DownOneSVG />}
          />
        );
      }
    }
  };

  const renderLeafIcon = (isOpen: boolean) => {
    const hasChildren = children && children.length > 0;
    if (hasChildren) {
      if (isOpen) {
        return <FolderOpenSVG width={14} height={14} />;
      } else {
        return <FolderCloseSVG width={14} height={14} />;
      }
    } else {
      return <FileSVG width={14} height={14} />;
    }
  };

  return (
    <BranchContainer theme={{ isRoot }} {...props}>
      <Accordion isOpenOnMount={isOpenOnMount}>
        {(isOpen) => {
          return (
            <Fragment>
              <Accordion.Trigger>
                <BranchRow>
                  {renderIcon(isOpen)}
                  <LeafArea
                    theme={{
                      isActive: selectedBranchId === id,
                    }}
                    onClick={handleClick}
                  >
                    {onSelect ? (
                      <Checkbox
                        id={id}
                        label={title}
                        isChecked={selectedKeys.includes(id)}
                        onChange={() => handleSelect({ id, title, children })}
                      />
                    ) : (
                      <Fragment>
                        {renderLeafIcon(isOpen)}
                        {title}
                      </Fragment>
                    )}
                  </LeafArea>
                </BranchRow>
              </Accordion.Trigger>
              <Accordion.Body>
                <div>
                  {children?.map(({ id, title, children, row }) => {
                    return (
                      <Branch
                        key={id}
                        id={id}
                        title={title}
                        row={row}
                        isOpenOnMount={isOpenOnMount}
                      >
                        {children}
                      </Branch>
                    );
                  })}
                </div>
              </Accordion.Body>
            </Fragment>
          );
        }}
      </Accordion>
    </BranchContainer>
  );
};

export default Branch;
