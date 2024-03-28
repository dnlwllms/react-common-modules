import { FC } from "react";

import { FieldProps } from "./types";
import EditorStyledComponents from "./styled";

const { FieldContainer } = EditorStyledComponents;

const Field: FC<FieldProps> = ({ label, value, autoFocus, onChange }) => {
  return (
    <FieldContainer>
      <span>{label}</span>
      <textarea
        autoFocus={autoFocus}
        name={label}
        value={typeof value === "string" ? value : JSON.stringify(value)}
        rows={1}
        onChange={onChange}
        onFocus={(e) => {
          setTimeout(() => {
            e.target.select();
          });
        }}
      />
    </FieldContainer>
  );
};

export default Field;
