import { createContext } from "react";

import { reducerInitialState } from "./reducer";

const WidgetUIContext = createContext(reducerInitialState);

export default WidgetUIContext;