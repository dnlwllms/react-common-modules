import {
  Chart,
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
} from "chart.js";

import { ColorPalette } from "../types";

export interface ChartJSProps {
  config:
    | ChartConfiguration<any, any[], unknown>
    | ChartConfigurationCustomTypesPerDataset<any, any[], unknown>;
  hasLegend?: boolean;
  hasCommonOption?: boolean;
  colorPalette?: ColorPalette;
  isPieChart?: boolean;
  hasGrid?: boolean;
}

export interface ChartJSProgressContext {
  // Chart object
  chart: Chart;

  // Number of animations still in progress
  currentStep: number;

  // `true` for the initial animation of the chart
  initial: boolean;

  // Total number of animations at the start of current animation
  numSteps: number;
}
