import { Chart } from "chart.js";
import { createContext } from "react";

const ChartJSContext = createContext<Chart | undefined>(undefined);

export default ChartJSContext;
