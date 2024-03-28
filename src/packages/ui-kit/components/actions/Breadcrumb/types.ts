import { ReactElement } from "react";

export type BreadcrumbItem = {
  key: string;
  title: string;
  link?: string;
};

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  as?: (breadCrumbItem: BreadcrumbItem) => ReactElement;
}
