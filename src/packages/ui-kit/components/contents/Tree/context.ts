import { createContext } from "react";
import { TreeContextType } from "./types";

const TreeContext = createContext<TreeContextType>({
  iconType: "arrow",
  selectedKeys: [], 
});

export default TreeContext;
