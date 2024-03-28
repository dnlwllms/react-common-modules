import { ColorPalette } from "../../types";

export interface LegendItem {
  label: string;
  isHide: boolean;
}

export interface LegendProps {
  items: LegendItem[];

  colorPalette?: ColorPalette;

  onItemClick: (item: LegendItem, index: number) => void;
}
