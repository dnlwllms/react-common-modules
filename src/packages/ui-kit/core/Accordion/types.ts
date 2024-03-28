import { FC, ReactElement } from "react";

import Trigger from "./Trigger";
import Body from "./Body";

export interface AccordionProps {
  isOpenOnMount?: boolean;
  delay?: number;

  children: (isOpen: boolean) => ReactElement;
}

export interface TriggerProps {
  children: ReactElement;

  onClick?: (isOpen: boolean) => void;
}

export interface BodyProps {
  children: ReactElement;
}

export interface InternalAccordion extends FC<AccordionProps> {
  Trigger: typeof Trigger;
  Body: typeof Body;
}
