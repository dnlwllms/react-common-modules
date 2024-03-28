import React, { FC, useEffect, useRef, useState } from "react";

import { transform } from "sucrase";
import Editor from "../Editor";

import { PlaygroundProps } from "./types";
import PlaygroundStyledComponent from "./styled";

import { util } from "../../core";

import {
  Button,
  Collapse,
  Dropdown,
  IconButton,
  TextButton,
  Menu,
  Breadcrumb,
  CircleIconButton,
} from "../../components/actions";
import {
  Tag,
  Pagination,
  Tree,
  Tooltip,
  Table,
  ImageGallery,
} from "../../components/contents";
import { Toast, Badge, Modal, Alert, Spinner } from "../../components/feedback";
import { Tab, VerticalTab } from "../../components/navigation";
import {
  Checkbox,
  RadioButton,
  Slider,
  Toggle,
  Chip,
  Calendar,
  DatePicker,
  RangePicker,
  Scheduler,
} from "../../components/selection";
import {
  Input,
  Search,
  Textarea,
  InputDatePicker,
  InputRangePicker,
  InputTimePicker,
} from "../../components/textInput";

import {
  BarChart,
  ColumnChart,
  LineChart,
  ComboChart,
  PieChart,
  ScatterChart,
  RadarChart,
} from "../../data-lab/chart";
import { ErrorBoundary } from "react-error-boundary";
import Upload from "../../components/selection/Upload";

const { Container, Body, ComponentArea, ErrorArea } = PlaygroundStyledComponent;

const playgroundComponents = [
  Button,
  Collapse,
  Dropdown,
  IconButton,
  TextButton,
  Menu,
  Breadcrumb,
  CircleIconButton,
  Tag,
  Pagination,
  Tree,
  Tooltip,
  Toast,
  Badge,
  Modal,
  Alert,
  Spinner,
  Tab,
  VerticalTab,
  Checkbox,
  RadioButton,
  Slider,
  Toggle,
  Chip,
  Input,
  Search,
  Textarea,
  BarChart,
  ColumnChart,
  LineChart,
  ComboChart,
  PieChart,
  ScatterChart,
  RadarChart,
  Table,
  Upload,
  Calendar,
  DatePicker,
  RangePicker,
  InputDatePicker,
  InputRangePicker,
  InputTimePicker,
  Scheduler,
  ImageGallery,
];

const Playground: FC<PlaygroundProps> = ({ displayName, demo }) => {
  const [code, setCode] = useState(
    `${demo}

export default App;
`
  );

  const timerRef = useRef<NodeJS.Timeout>();

  const resetRef = useRef<any>();

  const [component, setComponent] = useState<any>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      try {
        if (resetRef.current) {
          resetRef.current();
        }
        const target = playgroundComponents.find(
          (component) => component.displayName === displayName
        );

        if (target && code) {
          if (displayName) {
            // eslint-disable-next-line no-new-func
            const Comp = new Function(
              "React",
              displayName,
              "util",
              transform(code, {
                transforms: ["typescript", "jsx"],
              }).code.replace("export default", "return")
            )(React, target, util);

            setComponent(<Comp />);

            setError(undefined);
          } else {
            setError("displayName이 없습니다.");
          }
        }
      } catch (e: any) {
        setError(e.message);
      }
    }, 600);
  }, [code, displayName]);

  return (
    <Container>
      <Body>
        <ComponentArea>
          <ErrorBoundary
            fallbackRender={({ resetErrorBoundary }) => {
              resetRef.current = resetErrorBoundary;
              return <div />;
            }}
            onError={(e) => setError(e.message)}
          >
            {component}
          </ErrorBoundary>
        </ComponentArea>
      </Body>
      <div onMouseDown={(e) => e.stopPropagation()}>
        <Editor value={code} onChange={(code) => setCode(code)} />
        {error && <ErrorArea>{error}</ErrorArea>}
      </div>
    </Container>
  );
};
export default Playground;
