import { FC } from "react";

import { TagProps } from "./types";
import TagStyledComponents from "./styled";

const { Container } = TagStyledComponents;

const Tag: FC<TagProps> = ({ isFilled, isCapsule, ...props }) => {
  return (
    <Container
      theme={{
        isFilled,
        isCapsule,
      }}
      {...props}
    />
  );
};

Tag.displayName = "Tag";

export default Tag;
