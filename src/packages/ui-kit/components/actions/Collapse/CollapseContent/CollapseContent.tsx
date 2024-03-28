import { FC } from "react";
import { CollapseContentProps } from "./types";
import ContentStyledComponents from "./styled";

const { Content } = ContentStyledComponents;

const CollapseContent: FC<CollapseContentProps> = () => {
  return <Content>아직 결정난 사항 없음</Content>;
};

export default CollapseContent;
