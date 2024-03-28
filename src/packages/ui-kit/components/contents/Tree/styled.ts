import styled, { css } from "styled-components";
import { IconButton } from "../../actions";
import { getColor, typography } from "../../../foundations";

const StyledIconButton = styled(IconButton)`
  svg {
    width: 16px;
    height: 16px;
  }
`;

const TreeStyledComponents = {
  TreeContainer: styled.div`
    user-select: none;
  `,

  BranchContainer: styled.div<{ theme: { isRoot?: boolean } }>`
    display: flex;
    flex-direction: column;
    gap: 4px;

    padding-left: ${({ theme: { isRoot } }) => {
      return isRoot ? "0px" : "30px";
    }};
  `,

  BranchRow: styled.div`
    display: flex;
    align-items: center;

    height: 32px;

    ${typography.body02M}

    cursor: pointer;
  `,

  LeafArea: styled.div<{ theme: { isActive: boolean } }>`
    display: flex;
    gap: 4px;
    align-items: center;
    flex: 1;
    padding: 8px;
    border-radius: 8px;

    &:hover {
      ${getColor("background", "gray100")}
    }

    ${({ theme: { isActive } }) => {
      if (isActive) {
        return css`
          ${getColor("background", "gray200")}
        `;
      }
    }}
  `,

  StyledIconButton,

  StyledArrowIconButton: styled(StyledIconButton)<{
    theme: { isOpen: boolean };
  }>`
    svg {
      transform: ${({ theme: { isOpen } }) =>
        isOpen ? "rotate(0deg)" : "rotate(-90deg)"};
      transition: 0.2s;
    }
  `,
};

export default TreeStyledComponents;
