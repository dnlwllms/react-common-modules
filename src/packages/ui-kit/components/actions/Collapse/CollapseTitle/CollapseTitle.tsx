import { FC, useContext } from "react";

import { CollapseTitleProps } from "./types";
import TitleStyledComponents from "./styled";
import CollapseContext from "../context";
import DownSVG from "./DownSVG";

const { Title } = TitleStyledComponents;

const CollapseTitle: FC<CollapseTitleProps> = ({ isOpen }) => {
  const { size } = useContext(CollapseContext);
  const handleClick = (value: boolean) => {};
  return (
    <Title theme={{ size, isOpen }} onClick={() => handleClick}>
      Show More <DownSVG />
    </Title>
  );
};

export default CollapseTitle;
