import { FC } from "react";

import CodeEditor from "react-simple-code-editor";

import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";

import { EditorProps } from "./types";

const Editor: FC<EditorProps> = ({
  value,
  onChange,
  padding = 10,
  isReadOnly = false,
}) => {
  return (
      <CodeEditor
        value={value}
        onValueChange={onChange}
        readOnly={isReadOnly}
        highlight={(code) =>
          highlight(code, languages.javascript, "javascript")
        }
        padding={padding}
        style={{
          fontFamily:
            '"Lucida Console", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          fontSize: 12,
          lineHeight: 1.5,
          color: "black",
        }}
      />
  );
};

export default Editor;
