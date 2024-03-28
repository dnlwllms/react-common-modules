import { FC } from "react";

import { APIDocsProps } from "./types";
import APIDocsStyledComponents from "./styled";

const { StyledTable } = APIDocsStyledComponents;

const APIDocs: FC<APIDocsProps> = ({ rows }) => {
  return (
    <StyledTable
      columns={[
        {
          key: "props",
          title: "Props",
          render: (value) => {
            return <div dangerouslySetInnerHTML={{ __html: value }} />;
          },
        },
        {
          key: "description",
          title: "Decription",
          render: (value) => {
            return <div dangerouslySetInnerHTML={{ __html: value }} />;
          },
        },
        {
          key: "type",
          title: "Type",
          render: (value) => {
            return <div dangerouslySetInnerHTML={{ __html: value }} />;
          },
        },
        {
          key: "default",
          title: "Default",
          render: (value) => {
            return <div dangerouslySetInnerHTML={{ __html: value }} />;
          },
        },
      ]}
      initialData={rows}
    />
  );
};

export default APIDocs;
