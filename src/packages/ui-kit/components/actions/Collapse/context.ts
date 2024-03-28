import { createContext } from "react";
import { CollapseContextType } from "./types";

const CollapseContext = createContext<CollapseContextType>({
  size: "medium",
});

export default CollapseContext;
