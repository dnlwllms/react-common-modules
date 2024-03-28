import { FC } from "react";

import {
  DomainId,
  BUTTON_DOMAIN_ID,
  COLLAPSE_DOMAIN_ID,
  DROPDOWN_DOMAIN_ID,
  ICON_BUTTON_DOMAIN_ID,
  TEXT_BUTTON_DOMAIN_ID,
  MENU_DOMAIN_ID,
  BREADCRUMB_DOMAIN_ID,
  CIRCLE_ICON_BUTTON_DOMAIN_ID,
  PAGINATION_DOMAIN_ID,
  TREE_DOMAIN_ID,
  TOAST_DOMAIN_ID,
  MODAL_DOMAIN_ID,
  ALERT_DOMAIN_ID,
  SPINNER_DOMAIN_ID,
  TAG_DOMAIN_ID,
  TOOLTIP_DOMAIN_ID,
  TAB_DOMAIN_ID,
  VERTICAL_TAB_DOMAIN_ID,
  CHECKBOX_DOMAIN_ID,
  RADIO_BUTTON_DOMAIN_ID,
  SLIDER_DOMAIN_ID,
  TOGGLE_DOMAIN_ID,
  CHIP_DOMAIN_ID,
  INPUT_DOMAIN_ID,
  SEARCH_DOMAIN_ID,
  BADGE_DOMAIN_ID,
  BAR_CHART_DOMAIN_ID,
  COLUMN_CHART_DOMAIN_ID,
  LINE_CHART_DOMAIN_ID,
  PIE_CHART_DOMAIN_ID,
  SCATTER_CHART_DOMAIN_ID,
  RADAR_CHART_DOMAIN_ID,
  COMBO_CHART_DOMAIN_ID,
  WIDGETUI_DOMAIN_ID,
  TABLE_DOMAIN_ID,
  CALENDAR_DOMAIN_ID,
  TEXTAREA_DOMAIN_ID,
  UPLOAD_DOMAIN_ID,
  IMAGE_GALLERY_DOMAIN_ID,
} from "./domain";

import {
  Button,
  Collapse,
  Dropdown,
  IconButton,
  TextButton,
  Menu,
  Breadcrumb,
  CircleIconButton,
} from "../../packages/ui-kit/components/actions";
import {
  Tag,
  Pagination,
  Tree,
  Tooltip,
  ImageGallery,
  Table,
} from "../../packages/ui-kit/components/contents";
import {
  Toast,
  Badge,
  Modal,
  Alert,
  Spinner,
} from "../../packages/ui-kit/components/feedback";
import { Tab, VerticalTab } from "../../packages/ui-kit/components/navigation";
import {
  Checkbox,
  RadioButton,
  Slider,
  Toggle,
  Chip,
  DatePicker,
  RangePicker,
  Scheduler,
  Upload,
} from "../../packages/ui-kit/components/selection";
import {
  Input,
  Search,
  Textarea,
  InputDatePicker,
  InputRangePicker,
  InputTimePicker,
} from "../../packages/ui-kit/components/textInput";
import { WidgetUI } from "../../packages/ui-kit/core";
import {
  BarChart,
  ColumnChart,
  LineChart,
  ComboChart,
  PieChart,
  ScatterChart,
  RadarChart,
} from "../../packages/ui-kit/data-lab/chart";

import { APIDocRow } from "../../packages/ui-kit/develop/APIDocs/types";

export const registry: Record<
  DomainId | string,
  {
    components: {
      title: string;
      element: FC<any>;
      demo: string;
    }[];
    apiDocs?: APIDocRow[];
  }
> = {
  [BUTTON_DOMAIN_ID]: {
    components: [
      {
        title: "Box Button",
        element: Button,
        demo: `const App = () => {
  return (
    <Button type="button" children="Button" size="medium" color="primary" />
  )
}`,
      },
      {
        title: "Box Button-Leading Icon",
        element: Button,
        demo: `const App = () => {
  return (
    <Button
      type="button"
      children="Button"
      size="medium"
      color="primary"
      icon={{
      position: "leading",
      node: "+",
      }}
    />
  )
}`,
      },
      {
        title: "Box Button-Trailing Icon",
        element: Button,
        demo: `const App = () => {
  return (
    <Button
      type="button"
      children="Button"
      size="medium"
      color="primary"
      icon={{
        position: "trailing",
        node: "+",
      }}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "type",
        description: "버튼의 타입을 지정합니다.",
        type: '"button" | "submit" | "reset"',
        default: '"button"',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"x-small" | "small" | "medium" | "large" | "x-large"',
        default: '"medium"',
      },
      {
        props: "color",
        description: "디자인 시스템 규정에 따라 색상을 설정합니다.",
        type: '"primary" | "gray01" | "gray02"',
        default: '"primary"',
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "icon",
        description:
          "버튼 안에 icon을 추가할 경우 사용합니다.<ul><li>icon.position - leading은 앞 쪽에 trailing은 뒤 쪽에 추가됩니다.</li><li>icon.node - 표시할 icon 엘리멘트 입니다.</li></ul>",
        type: `{ 
  position: "leading" | "trailing",
  node: React.ReactNode
}`,
        default: "undefined",
      },
      {
        props: "isCapsule",
        description: "캡슐 형태 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "isBlock",
        description:
          "<i>Button</i>이 블록 형태로 컨테이너 크기에 맞게 너비가 변경되게 할 지 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
    ],
  },
  [COLLAPSE_DOMAIN_ID]: {
    components: [
      {
        title: "Collapse",
        element: Collapse,
        demo: `const App = () => <Collapse size="medium" isDisabled={false} />`,
      },
    ],
  },
  [DROPDOWN_DOMAIN_ID]: {
    components: [
      {
        title: "Dropdown",
        element: Dropdown,
        demo: `const App = () => {
  const [value, setValue] = React.useState("1");

  return (
    <Dropdown
      size="medium"
      isDisabled={false}
      value={value}
      onChange={setValue}
      options={[
        {
          value: "1",
          title: "Dropdown 1",
        },
        {
          value: "2",
          title: "Dropdown 2",
        },
        {
          value: "3",
          title: "Dropdown 3",
        },
        {
          value: "4",
          title: "Dropdown 4",
        },
      ]}
    />
  );
}`,
      },
    ],
    apiDocs: [
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"x-small" | "small" | "medium" | "large"',
        default: '"medium"',
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "options",
        description: "옵션을 정의합니다.",
        type: `{
  title?: string,
  value: string
}[]`,
        default: "[]",
      },
      {
        props: "selectedValue",
        description: "선택된 값을 설정합니다.",
        type: "string",
        default: '""',
      },
      {
        props: "onChange",
        description: "값이 변경될 때 실행되는 핸들러 입니다.",
        type: "(value: string) => void",
        default: "undefined",
      },
    ],
  },
  [ICON_BUTTON_DOMAIN_ID]: {
    components: [
      {
        title: "Icon Button",
        element: IconButton,
        demo: `const App = () => <IconButton type="button" icon="🚘" isDisabled={false} />`,
      },
    ],
    apiDocs: [
      {
        props: "type",
        description: "버튼의 타입을 지정합니다.",
        type: '"button" | "submit" | "reset"',
        default: '"button"',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"x-small" | "small" | "medium"',
        default: '"medium"',
      },
      {
        props: "icon",
        description: "사용할 icon 엘리멘트를 설정합니다.",
        type: "React.ReactNode",
        default: "undefined",
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
    ],
  },
  [TEXT_BUTTON_DOMAIN_ID]: {
    components: [
      {
        title: "Text Button",
        element: TextButton,
        demo: `const App = () => (
  <TextButton type="button" isDisabled={false} hasUnderline>
    Text Button
  </TextButton>
)`,
      },
    ],
    apiDocs: [
      {
        props: "type",
        description: "버튼의 타입을 지정합니다.",
        type: '"button" | "submit" | "reset"',
        default: '"button"',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"small" | "medium" | "large"',
        default: '"medium"',
      },
      {
        props: "icon",
        description:
          "버튼 안에 icon을 추가할 경우 사용합니다.<ul><li>icon.position - leading은 앞 쪽에 trailing은 뒤 쪽에 추가됩니다.</li><li>icon.node - 표시할 icon 엘리멘트 입니다.</li></ul>",
        type: `{ 
  position: "leading" | "trailing",
  node: React.ReactNode
}`,
        default: "undefined",
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "hasUnderline",
        description: "마우스 호버 시 밑줄의 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
    ],
  },
  [MENU_DOMAIN_ID]: {
    components: [
      {
        title: "Menu",
        element: Menu,
        demo: `const App = () => {
  const [value, setValue] = React.useState("1");

  return (
    <Menu
      title="타이틀"
      options={[
        { title: "111", value: "111" },
        { title: "222", value: "222", isDisabled: true },
        { title: "333", value: "333" },
        { title: "444", value: "444" },
      ]}
      defaultValue={value}
      onChange={setValue}
      name="radioGroup"
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "title",
        description: "타이틀 문구를 설정합니다.",
        type: "string",
        default: '""',
      },
      {
        props: "options",
        description:
          "옵션을 정의합니다. <br/><code>isDisabled</code>는 메뉴의 활성/비활성 상태를 지정합니다.",
        type: `{
          title: string,
          value: string,
          isDisabled?: boolean,
        }[]`,
        default: "[]",
      },
      {
        props: "defaultValue",
        description: "옵션의 기본 선택 값을 지정합니다.",
        type: "string",
        default: '""',
      },
      {
        props: "name",
        description: "옵션들을 그룹화를 하기 위해 문구를 설정합니다.",
        type: "string",
        default: '""',
      },
    ],
  },
  [BREADCRUMB_DOMAIN_ID]: {
    components: [
      {
        title: "Breadcrumb",
        element: Breadcrumb,
        demo: `const App = () => {
  return (
    <Breadcrumb
      items={[
        { title: "1", link: "1", key: "1" },
        { title: "2", link: "2", key: "2" },
        { title: "3", key: "3" }
      ]}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "options",
        description: "Breadcrumb 요소를 설정합니다.",
        type: `BreadcrumbItem {
  key: string,
  title: string,
  link?: boolean,
}[]`,
        default: "undefined",
      },
      {
        props: "as",
        description:
          "a 태그 대신에 Link 태그를 사용을 할 경우 as를 사용합니다.",
        type: "(breadcrumbItem: BreadcrumbItem) => React.ReactElement",
        default: "undefined",
      },
    ],
  },
  [CIRCLE_ICON_BUTTON_DOMAIN_ID]: {
    components: [
      {
        title: "Circle Icon Button",
        element: CircleIconButton,
        demo: `const App = () => {
  const [value, setValue] = React.useState(false);
        
  return (
    <CircleIconButton
      isActive={value}
      isDisabled={false}
      icon="🚘"
      onClick={() => {setValue(!value)}}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "icon",
        description: "사용할 icon 엘리멘트를 설정합니다.",
        type: "React.ReactNode",
        default: "undefined",
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
    ],
  },

  [TOAST_DOMAIN_ID]: {
    components: [
      {
        title: "Toast",
        element: Toast,
        demo: `const App = () => <Toast message="toast" color="black" size="medium" />`,
      },
    ],
    apiDocs: [
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"medium" | "large"',
        default: '"medium"',
      },
      {
        props: "color",
        description: "디자인 시스템 규정에 따라 색상을 설정합니다.",
        type: '"black" | "white"',
        default: '"black"',
      },
      {
        props: "message",
        description: "토스트 문구를 설정합니다.",
        type: "string",
        default: '""',
      },
    ],
  },
  [BADGE_DOMAIN_ID]: {
    components: [
      {
        title: "Badge",
        element: Badge,
        demo: `const App = () => <Badge value="N" />`,
      },
    ],
    apiDocs: [
      {
        props: "value",
        description:
          '값에 따라 뱃지 스타일이 달라집니다. <i>number</i>타입의 경우 100 이상은 "999+"로 표시되며 값이 <i>undefined</i>인 경우는 dot 형태로 표시됩니다.',
        type: "string | number | undefined",
        default: "undefined",
      },
      {
        props: "visible",
        description: "뱃지 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "true",
      },
    ],
  },
  [MODAL_DOMAIN_ID]: {
    components: [
      {
        title: "Modal",
        element: Modal,
        demo: `const App = () => (
  <Modal size="medium">
    <>
      <Modal.Header onClose={() => console.log("click close")} />
      <Modal.Body>
        This is an area where the modal content, such as text or images
        are indicated.
      </Modal.Body>
      <Modal.Footer
        primary={{
          title: "Button",
          onClick: () => console.log("click primary button"),
        }}
        secondary={{
          title: "Button",
          onClick: () => console.log("click secondary button"),
        }}
      />
    </>
  </Modal>
)`,
      },
    ],
    apiDocs: [
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"medium" | "large" | "x-large"',
        default: "undefined",
      },
      {
        props: "(Modal.Header) title",
        description: "타이틀 문구를 설정합니다.",
        type: "string",
        default: '""',
      },
      {
        props: "(Modal.Header) hideCloseButton",
        description: "닫기 버튼 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "(Modal.Header) onClose",
        description: "닫기 버튼 클릭 시 이벤트를 핸들링 합니다.",
        type: "() => void",
        default: "undefined",
      },
      {
        props: "(Modal.Footer) primary",
        description:
          "primary 버튼 클릭 시 이벤트를 핸들러와 타이틀, 활성 / 비활성 여부를 설정합니다.",
        type: `{
  title: string;
  onClick: () => void;
  isDisabled: boolean;
}`,
        default: "undefined",
      },
      {
        props: "(Modal.Footer) secondary",
        description:
          "secondary 버튼 클릭 시 이벤트를 핸들러와 타이틀, 활성 / 비활성 여부를 설정합니다.",
        type: `{
  title: string;
  onClick: () => void;
  isDisabled: boolean;
}`,
        default: "undefined",
      },
    ],
  },
  [ALERT_DOMAIN_ID]: {
    components: [
      {
        title: "Alert",
        element: Alert,
        demo: `const App = () => (
  <Alert
    alertType="error"
    title="Title"
    description="This is an area where the alert content."
    buttonLabel="Button"
    onButtonClick={() => {
      console.log("test");
    }}
    onCloseClick={() => {
      console.log("close");
    }}
  />
)`,
      },
    ],
    apiDocs: [
      {
        props: "alertType",
        description: "컴포넌트 타입을 지정합니다.",
        type: '"error" | "caution"',
        default: "error",
      },
      {
        props: "title",
        description: "타이틀 문구를 설정합니다.",
        type: "string",
        default: '""',
      },
      {
        props: "description",
        description: "정보 문구를 설정합니다",
        type: "string",
        default: '""',
      },
      {
        props: "buttonLabel",
        description: "버튼 문구를 설정합니다",
        type: "string",
        default: '""',
      },
      {
        props: "onCloseClick",
        description: "닫기 버튼 클릭 시 이벤트를 핸들링 합니다.",
        type: "() => void",
        default: "undefined",
      },
      {
        props: "onButtonClick",
        description: "buttonLabel 버튼 클릭 시 이벤트를 핸들링 합니다.",
        type: "() => void",
        default: "undefined",
      },
    ],
  },
  [SPINNER_DOMAIN_ID]: {
    components: [
      {
        title: "Spinner",
        element: Spinner,
        demo: `const App = () => (
  <Spinner />
)
`,
      },
    ],
    apiDocs: [
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: 'number | "small" | "medium" | "large"',
        default: '"medium"',
      },
    ],
  },

  [TAG_DOMAIN_ID]: {
    components: [
      {
        title: "Tag",
        element: Tag,
        demo: `const App = () => <Tag isFilled={false} isCapsule={false}>Text</Tag>`,
      },
    ],
    apiDocs: [
      {
        props: "isFilled",
        description: "내부 색상 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "isCapsule",
        description: "캡슐 형태 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
    ],
  },
  [TOOLTIP_DOMAIN_ID]: {
    components: [
      {
        title: "Tooltip",
        element: Tooltip,
        demo: `const App = () => (
  <Tooltip
    size="medium"
    direction="top"
    color="gray"
    hideArrow={false}
  >
    Please enter a description
  </Tooltip>
)`,
      },
    ],
    apiDocs: [
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"x-small" | "small" | "medium" | "large" | "x-large"',
        default: '"medium"',
      },
      {
        props: "direction",
        description: "말풍선 방향을 설정합니다.",
        type: '"top" | "left" | "right" | "bottom"',
        default: '"top"',
      },
      {
        props: "color",
        description: "디자인 시스템 규정에 따라 색상을 설정합니다.",
        type: '"gray" | "white"',
        default: '"gray"',
      },
      {
        props: "hideArrow",
        description: "말풍선 꼬리의 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
    ],
  },
  [PAGINATION_DOMAIN_ID]: {
    components: [
      {
        title: "Pagination",
        element: Pagination,
        demo: `const App = () => {
  const [page, setPage] = React.useState(1);

  return (
    <Pagination
      type="number"
      color="gray01"
      total={5}
      current={page}
      onChange={setPage}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "type",
        description: "디자인 시스템 규정에 따라 유형을 설정합니다.",
        type: '"basic" | "numeric" | "number" | "dot"',
        default: '"number"',
      },
      {
        props: "color",
        description: "디자인 시스템 규정에 따라 색상을 설정합니다.",
        type: '"gray01" | "gray02"',
        default: '"gray01"',
      },
      {
        props: "total",
        description: "전체 페이지 크기를 설정합니다.",
        type: "number",
        default: "1",
      },
      {
        props: "current",
        description: "현재 페이지 크기를 설정합니다.",
        type: "number",
        default: "1",
      },
      {
        props: "onChange",
        description: "페이지 변경 시 이벤트를 핸들링 합니다.",
        type: "(current: number) => void",
        default: "undefined",
      },
    ],
  },
  [TREE_DOMAIN_ID]: {
    components: [
      {
        title: "Tree",
        element: Tree,
        demo: `const App = () => {
  const [branches, setBranches] = React.useState([
    {
      id: "0",
      title: "Text Label",
      children: [
        {
          id: "0-0",
          title: "Text Label",
          children: [
            {
              id: "0-0-0",
              title: "Text Label",
            }
          ]
        },
        {
          id: "0-1",
          title: "Text Label",
        },
        {
          id: "0-2",
          title: "Text Label",
        },
      ]
    },
    {
      id: "1",
      title: "Text Label",
      children: [
        {
          id: "1-0",
          title: "Text Label",
        },
        {
          id: "1-1",
          title: "Text Label",
        },
        {
          id: "1-2",
          title: "Text Label",
        },
      ]
    },
  ]);
      
  const [selectedKeys, setSelectedKeys] = React.useState([]);

  const handleSelect = (ids: string[]) => {
    setSelectedKeys(ids);
  }

  return (
    <Tree 
      branches={branches}
      selectedKeys={selectedKeys} 
      onClick={console.log}
      onSelect={handleSelect}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "branches",
        description: "트리를 구성할 항목을 설정합니다.",
        type: `BranchType {
  id: string;
  title: string;
  children: BranchType[]
}[]`,
        default: "undefined",
      },
      {
        props: "iconType",
        description: "아이콘 유형을 설정합니다",
        type: `BranchType {
  id: string;
  title: string;
  children: BranchType[]
}[]`,
        default: "undefined",
      },
      {
        props: "branches",
        description: "트리를 구성할 항목을 설정합니다.",
        type: `"arrow" | "character"`,
        default: '"arrow"',
      },
      {
        props: "selectedKeys",
        description: "선택된 항목의 상태를 설정합니다.",
        type: "string[]",
        default: "[]",
      },
      {
        props: "onClick",
        description: "항목을 클릭할 때 클릭된 항목의 객체를 반환합니다.",
        type: `(branch: BranchType) => void`,
        default: "undefined",
      },
      {
        props: "onSelect",
        description:
          "항목이 선택될 때 선택된 항목의 id를 1차원 배열로 반환합니다.",
        type: `(ids: string[]) => void`,
        default: "undefined",
      },
    ],
  },
  [IMAGE_GALLERY_DOMAIN_ID]: {
    components: [
      {
        title: "ImageGallery",
        element: ImageGallery,
        demo: `const App = () => {

  return (
    <ImageGallery 
      images={[
        {
          src: "https://images.unsplash.com/photo-1682686580003-22d3d65399a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
          alt: "바위 절벽에 서 있는 두 사람이 서로 마주보고 있다",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1676925875785-bf98c2eef3d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
          alt: "손에 묵주를 들고 있는 여자",
        },
        {
          src: "https://images.unsplash.com/photo-1710225342718-11c18a806f59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
          alt: "건물 난간에 앉아 있는 사람",
        },
        {
          src: "https://images.unsplash.com/photo-1710432157519-e437027d2e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
          alt: "바위 위에 앉아 있는 두 마리의 새를 그린 그림",
        },
      ]}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "images",
        description:
          "이미지 갤러리의 이미지 URL과 설명을 작성합니다.<ul><li>src - src는 이미지 url를 입력합니다.</li><li>alt - alt는 이미지 설명을 입력합니다.</li></ul>",
        type: `{
    src: string;
    alt: string;
} []`,
        default: "[]",
      },
    ],
  },

  [TAB_DOMAIN_ID]: {
    components: [
      {
        title: "Tab",
        element: Tab,
        demo: `const App = () => {
  const [tabKey, setTabKey] = React.useState("1");

  return (
    <Tab
      type="text"
      size="medium"
      items={[
        {
          key: "1",
          title: "Item 1",
        },
        {
          key: "2",
          title: "Item 2",
        },
        {
          key: "3",
          title: "Item 3",
        },
        {
          key: "4",
          title: "Long Text Item",
        },
      ]}
      value={tabKey}
      onChange={({ key }) => setTabKey(key)}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "type",
        description: "디자인 시스템 규정에 따라 유형을 설정합니다.",
        type: '"text" | "box"',
        default: '"text"',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"small" | "medium" | "large"',
        default: '"medium"',
      },
      {
        props: "items",
        description: "탭 요소를 설정합니다.",
        type: `TabItem {
  key: string;
  title: string;
}[]`,
        default: "undefined",
      },
      {
        props: "value",
        description: "선택된 요소의 key값을 설정합니다.",
        type: "number",
        default: "1",
      },
      {
        props: "onChange",
        description: "탭 변경 시 이벤트를 핸들링 합니다.",
        type: "(tabItem: TabItem) => void",
        default: "undefined",
      },
    ],
  },
  [VERTICAL_TAB_DOMAIN_ID]: {
    components: [
      {
        title: "VerticalTab",
        element: VerticalTab,
        demo: `const App = () => {
  const [tabKey, setTabKey] = React.useState("1");

  return (
    <VerticalTab
      items={[
        { key: "1", title: "테스트"},
        { key: "2", title: "테스트1"},
        { key: "3", title: "테스트2"},
      ]}
      value={tabKey}
      onChange={({ key }) => setTabKey(key)}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "items",
        description:
          "탭 요소를 설정합니다. 탭에 아이콘이 필요한 경우 <code>icon</code>을 설정합니다.",
        type: `VerticalTabItem {
key: string;
title: string;
icon?: React.ReactNode;
}[]`,
        default: "undefined",
      },
      {
        props: "value",
        description: "선택된 요소의 key값을 설정합니다.",
        type: "number",
        default: "1",
      },
      {
        props: "onChange",
        description: "탭 변경 시 이벤트를 핸들링 합니다.",
        type: "(tabItem: TabItem) => void",
        default: "undefined",
      },
    ],
  },

  [CHECKBOX_DOMAIN_ID]: {
    components: [
      {
        title: "Checkbox",
        element: Checkbox,
        demo: `const App = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Checkbox
      label="Text"
      isChecked={isChecked}
      isDisabled={false}
      onChange={setIsChecked}
      size="small"
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "isChecked",
        description: "체크의 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "onChange",
        description: "체크 상태 변경 시 이벤트를 핸들링 합니다.",
        type: "(isChecked: boolean) => void",
        default: "undefined",
      },
      {
        props: "label",
        description: "체크 박스 라벨을 설정합니다.",
        type: "string",
        default: '""',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"small" | "x-small"',
        default: '"small"',
      },
    ],
  },
  [RADIO_BUTTON_DOMAIN_ID]: {
    components: [
      {
        title: "RadioButton",
        element: RadioButton,
        demo: `const App = () => {
  const [radioState, setRadioState] = React.useState("");

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <RadioButton
        id="text1"
        label="text1"
        name="text"
        isDisabled={false}
        isChecked={radioState === "1"}
        onChange={() => setRadioState("1")}
        size="small"
      />
      <RadioButton
        id="text2"
        label="text2"
        name="text"
        isDisabled={false}
        isChecked={radioState === "2"}
        onChange={() => setRadioState("2")}
        size="small"
      />
    </div>
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "isChecked",
        description: "체크의 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "onChange",
        description: "체크 상태 변경 시 이벤트를 핸들링 합니다.",
        type: "(isChecked: boolean) => void",
        default: "undefined",
      },
      {
        props: "label",
        description: "체크 박스 라벨을 설정합니다.",
        type: "string",
        default: '""',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"small" | "x-small"',
        default: '"small"',
      },
    ],
  },
  [SLIDER_DOMAIN_ID]: {
    components: [
      {
        title: "Slider",
        element: Slider,
        demo: `const App = () => {
  const [value, setValue] = React.useState([100, 1000]);

  return (
    <Slider
      min={100}
      max={1000}
      step={100}
      value={value}
      onChange={setValue}
      hasLabel={false}
      isDisabled={false}
    />
  );
}`,
      },
    ],
    apiDocs: [
      {
        props: "value",
        description: "현재 값을 설정합니다.",
        type: "[number, number]",
        default: "[min, max]",
      },
      {
        props: "min",
        description: "최소값을 설정합니다.",
        type: "number",
        default: "0",
      },
      {
        props: "max",
        description: "최대값을 설정합니다.",
        type: "number",
        default: "100",
      },
      {
        props: "step",
        description: "변경 단위를 설정합니다.",
        type: "number",
        default: "1",
      },
      {
        props: "names",
        description: "각 조절 input의 네임을 설정합니다.(form 사용 시)",
        type: "[string, string]",
        default: "undefined",
      },
      {
        props: "onChange",
        description: "값 변경 시 이벤트를 핸들링 합니다.",
        type: "(value: [number, number]) => void",
        default: "undefined",
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "hasLabel",
        description: "라벨의 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "labels",
        description: "각 조절 버튼의 라벨을 설정합니다.",
        type: "[string, string]",
        default: "undefined",
      },
    ],
  },
  [TOGGLE_DOMAIN_ID]: {
    components: [
      {
        title: "Toggle",
        element: Toggle,
        demo: `const App = () => {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <Toggle isOn={isOn} onChange={setIsOn} />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "isOn",
        description: "스위치 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "onChange",
        description: "스위치 상태 변경 시 이벤트를 핸들링 합니다.",
        type: "(isOn: boolean) => void",
        default: "undefined",
      },
    ],
  },
  [CHIP_DOMAIN_ID]: {
    components: [
      {
        title: "Chip",
        element: Chip,
        demo: `const App = () => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <Chip
      children="text"
      isDisabled={false}
      isSelected={isSelected}
      hasTrailingIcon={false}
      size="medium"
      onChange={setIsSelected}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"x-small" | "small" | "medium"',
        default: '"medium"',
      },
      {
        props: "isDisabled",
        description: "활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "isSelected",
        description: "선택 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "hasTrailingIcon",
        description: "선택 활성시 체크 아이콘 활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "onChange",
        description: "선택 시 이벤트를 핸들링 합니다.",
        type: "(isSelected: boolean) => void",
        default: "undefined",
      },
    ],
  },
  [CALENDAR_DOMAIN_ID]: {
    components: [
      {
        title: "DatePicker",
        element: DatePicker,
        demo: `const App = () => {
  const [date, setDate] = React.useState();
  
  return <DatePicker value={date} onChange={setDate} />
}`,
      },
      {
        title: "RangePicker",
        element: RangePicker,
        demo: `const App = () => {
  const [date, setDate] = React.useState();

  return (
    <RangePicker 
      value={date} 
      onChange={setDate}
      rangeQuickButtons={[
        {
          title: "당일",
          unit: "date",
          amount: 0,
        },
        {
          title: "1주일",
          unit: "week",
          amount: -1,
        },
        {
          title: "1개월",
          unit: "month",
          amount: -1,
        },
      ]} 
      hasTime
    />
  );
}`,
      },
      {
        title: "InputDatePicker",
        element: InputDatePicker,
        demo: `const App = () => {
  const [date, setDate] = React.useState();

  return (
    <InputDatePicker 
      value={date} 
      onChange={setDate}
      hasTime
    />
  );
}`,
      },
      {
        title: "InputRangePicker",
        element: InputRangePicker,
        demo: `const App = () => {
  const [date, setDate] = React.useState();

  return (
    <InputRangePicker 
      value={date} 
      onChange={setDate}
      rangeQuickButtons={[
        {
          title: "당일",
          unit: "date",
          amount: 0,
        },
        {
          title: "1주일",
          unit: "week",
          amount: -1,
        },
        {
          title: "1개월",
          unit: "month",
          amount: -1,
        },
      ]} 
      hasTime
    />
  );
}`,
      },
      {
        title: "InputTimePicker",
        element: InputTimePicker,
        demo: `const App = () => {
  const [date, setDate] = React.useState();

  return (
    <InputTimePicker 
      value={date} 
      onChange={setDate}
    />
  );
}`,
      },
      {
        title: "Scheduler",
        element: Scheduler,
        demo: `const App = () => {
  const [date, setDate] = React.useState();

  return (
    <Scheduler 
      date={new Date("2023-09-01")}
      schedules={[
        {
          key: "0",
          date: new Date("2023-09-04"),
          title: "엘리베이터 점검 시행",
        },
        {
          key: "1",
          date: new Date("2023-09-06"),
          title: "저수탱크 점검 시행",
        },
      ]}
    />
  );
}`,
      },
    ],
    apiDocs: [
      {
        props: "value",
        description: "현재 선택된 기간을 설정합니다.",
        type: "Date",
        default: "undefined",
      },
      {
        props: "onChange",
        description: "기간 변경 시 이벤트를 핸들링 합니다.",
        type: "(date: Date) => void",
        default: "undefined",
      },
      {
        props: "hasTime",
        description: "TimePicker 사용 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "rangeQuickButtons",
        description: "기간 설정 단축어 버튼을 설정합니다.",
        type: '{ title: string; unit: "year" | "week" | "month" | "date"; amount: number;}[]',
        default: "undefined",
      },
    ],
  },
  [UPLOAD_DOMAIN_ID]: {
    components: [
      {
        title: "Upload",
        element: Upload,
        demo: `const App = () => {

  return (
    <Upload multiple accept=".pdf"/>
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"small" | "medium"',
        default: '"medium"',
      },
      {
        props: "buttonText",
        description: "Upload 버튼 내 텍스트를 설정합니다.",
        type: "string",
        default: '"Upload"',
      },
      {
        props: "upload",
        description: "파일 업로드 콜백으로 업로드 API를 설정합니다.",
        type: "(file: File) => Promise<any>",
        default: "undefined",
      },
      {
        props: "onDeleteClick",
        description: "업로드 파일 삭제 버튼 클릭 핸들러 입니다.",
        type: "(file: File) => void",
        default: "undefined",
      },
      {
        props: "isDraggable",
        description:
          "드래그로 업로드가 가능하도록 합니다. 스타일이 변경됩니다.",
        type: "boolean",
        default: "false",
      },
    ],
  },

  [INPUT_DOMAIN_ID]: {
    components: [
      {
        title: "Input",
        element: Input,
        demo: `const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <Input
      size="medium"
      shape="box"
      value={value}
      onChange={setValue}
      placeholder="전화번호"
      isError={false}
      type="text"
      title="설명"
    />
  );
}`,
      },
    ],
    apiDocs: [
      {
        props: "shape",
        description: "디자인 시스템 규정에 따라 형태를 설정합니다.",
        type: '"box" | "underline"',
        default: '"box"',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"small" | "medium" | "large"',
        default: '"medium"',
      },
      {
        props: "isCapsule",
        description: "캡슐 형태의 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "hasClearButton",
        description: "input clear 버튼을 비활성 시킵니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "suffixNode",
        description: "input 내부에 ReactNode를 삽입합니다",
        type: "",
        default: "",
      },
      {
        props: "isError",
        description: "에러 상태를 설정합니다.",
        type: "boolean",
        default: "undefined",
      },
      {
        props: "icon",
        description: "아이콘을 설정합니다.",
        type: "React.ReactNode",
        default: "undefined",
      },
      {
        props: "onChange",
        description: "값 변경 시 이벤트를 핸들링 합니다.",
        type: "(value: string) => void",
        default: "undefined",
      },
    ],
  },
  [SEARCH_DOMAIN_ID]: {
    components: [
      {
        title: "Search",
        element: Search,
        demo: `const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <Search
      shape="box"
      size="medium"
      value={value}
      onChange={setValue}
      placeholder="검색"
      title="설명"
    />
  );
}`,
      },
    ],
    apiDocs: [
      {
        props: "shape",
        description: "디자인 시스템 규정에 따라 형태를 설정합니다.",
        type: '"box" | "underline"',
        default: '"box"',
      },
      {
        props: "size",
        description: "디자인 시스템 규정에 따라 크기를 설정합니다.",
        type: '"small" | "medium" | "large"',
        default: '"medium"',
      },
      {
        props: "isCapsule",
        description: "캡슐 형태의 활성 / 비활성 여부를 설정합니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "hasClearButton",
        description: "input clear 버튼을 비활성 시킵니다.",
        type: "boolean",
        default: "false",
      },
      {
        props: "suffixNode",
        description: "input 내부에 ReactNode를 삽입합니다",
        type: "",
        default: "",
      },
      {
        props: "onChange",
        description: "값 변경 시 이벤트를 핸들링 합니다.",
        type: "(value: string) => void",
        default: "undefined",
      },
    ],
  },
  [TEXTAREA_DOMAIN_ID]: {
    components: [
      {
        title: "Textarea",
        element: Textarea,
        demo: `const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <Textarea 
      placeholder="Text" 
      value={value} 
      onChange={setValue} 
      isError={false}
      maxLength={500}
    />
  );
}`,
      },
    ],
    apiDocs: [
      {
        props: "onChange",
        description: "변경 시 이벤트를 핸들링하며 바뀐 값을 전달합니다.",
        type: "(value: string) => void",
        default: "undefined",
      },
      {
        props: "isError",
        description: "에러 상태를 설정합니다.",
        type: "boolean",
        default: "undefined",
      },
    ],
  },

  [BAR_CHART_DOMAIN_ID]: {
    components: [
      {
        title: "Bar Chart - Basic",
        element: BarChart,
        demo: `const App = () => {          
  const regions = ["구로구", "강서구", "노원구", "서초구", "광진구"];

  return (
    <BarChart
      type="basic"
      data={{
        labels: regions,
        datasets: [
          {
            label: "Legend 1",
            data: regions.map(() => util.NumberUtility.getRandomNumber(1000 * 1000, 10 * 1000 * 1000)),
          },
        ],
      }}
    />
  );
}`,
      },
      {
        title: "Bar Chart - Stacked",
        element: BarChart,
        demo: `const App = () => {
  const regions = ["구로구", "강서구", "노원구", "서초구", "광진구"];

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;
  
  return (
    <BarChart
      type="stacked"
      data={{
        labels: regions,
        datasets: [
          {
            label: "Legend 1",
            data: regions.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 2",
            data: regions.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 3",
            data: regions.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Bar Chart - Grouped",
        element: BarChart,
        demo: `const App = () => {
  const regions = ["구로구", "강서구", "노원구", "서초구", "광진구"];

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <BarChart
      type="grouped"
      data={{
        labels: regions,
        datasets: [
          {
            label: "Legend 1",
            data: regions.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 2",
            data: regions.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 3",
            data: regions.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Bar Chart - Diverging",
        element: BarChart,
        demo: `const App = () => {
  const regions = ["구로구", "강서구", "노원구", "서초구", "광진구"];

  const regionDivergingChartData = regions.map((_, index) => {
    if (index % 2) {
      return util.NumberUtility.getRandomNumber(100, 500);
    } else {
      return util.NumberUtility.getRandomNumber(-500, -100);
    }
  });

  return (
    <BarChart
      type="diverging"
      data={{
        labels: regions,
        datasets: [
          {
            label: "Legend 1",
            data: regionDivergingChartData.map((value) =>
              value > 0 ? value : null
            ),
          },
          {
            label: "Legend 2",
            data: regionDivergingChartData.map((value) =>
              value < 0 ? value : null
            ),
          },
        ],
      }}
    />
  )
}`,
      },
    ],
  },
  [COLUMN_CHART_DOMAIN_ID]: {
    components: [
      {
        title: "Column Chart - Basic",
        element: ColumnChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <ColumnChart
      type="basic"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Column Chart - Stacked",
        element: ColumnChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <ColumnChart
      type="stacked"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 2",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 3",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Column Chart - Grouped",
        element: ColumnChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <ColumnChart
      type="grouped"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 2",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 3",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Column Chart - Diverging",
        element: ColumnChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const yearDivergingChartData = years.map((_, index) => {
    if (index % 2) {
      return util.NumberUtility.getRandomNumber(100, 500);
    } else {
      return util.NumberUtility.getRandomNumber(-500, -100);
    }
  });

  return (
    <ColumnChart
      type="diverging"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: yearDivergingChartData.map((value) =>
              value > 0 ? value : null
            ),
          },
          {
            label: "Legend 2",
            data: yearDivergingChartData.map((value) =>
              value < 0 ? value : null
            ),
          },
        ],
      }}
    />
  )
}`,
      },
    ],
  },
  [LINE_CHART_DOMAIN_ID]: {
    components: [
      {
        title: "Line Chart - Basic",
        element: LineChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <LineChart
      type="basic"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Line Chart - Multi Line",
        element: LineChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <LineChart
      type="multi"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 2",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 3",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Line Chart - Line Area",
        element: LineChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <LineChart
      type="area"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Line Chart - Dashed Line",
        element: LineChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <LineChart
      type="dashed"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Line Chart - Point Styling",
        element: LineChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <LineChart
      type="point"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Line Chart - Line Segment Styling",
        element: LineChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const segmentLineChartData = years.map((year) =>
    year ? util.NumberUtility.getRandomNumber() : null
  );

  return (
    <LineChart
      type="segment"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: [
              ...segmentLineChartData.slice(0, 8),
              ...segmentLineChartData.slice(8, 14).map(() => null),
            ],
          },
          {
            label: "Legend 2",
            data: [
              ...segmentLineChartData.slice(0, 7).map(() => null),
              ...segmentLineChartData.slice(7, 14),
            ],
            borderDash: [4],
          },
        ],
      }}
    />
  )
}`,
      },
    ],
  },
  [COMBO_CHART_DOMAIN_ID]: {
    components: [
      {
        title: "Combo Chart - Basic",
        element: ComboChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <ComboChart
      type="basic"
      data={{
        labels: years,
        datasets: [
          {
            label: "Legend 1",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 2",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 3",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
          },
          {
            label: "Legend 4",
            data: years.map(() => util.NumberUtility.getRandomNumber(min, max)),
            type: "line",
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Combo Chart - Line/Scatter",
        element: ComboChart,
        demo: `const App = () => {
  const years = Array.from({ length: 12 }).map((_, index) => index + 2012);

  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;
        
  return (
    <ComboChart
      type="line-scatter"
      data={{
        datasets: [
          {
            label: "Legend 1",
            data: years.map((year) => ({
              x: \`$\{year}-01-01\`,
              y: util.NumberUtility.getRandomNumber(min, max),
            })),
            type: "line",
          },
          {
            label: "Legend 2",
            data: Array.from({ length: 20 }).map(() => ({
              x: util.DateUtility.getRandomDate([
                new Date("2012-01-01"),
                new Date("2023-12-31"),
              ]),
              y: util.NumberUtility.getRandomNumber(min, max),
            })),
          },
        ],
      }}
    />
  )
}`,
      },
    ],
  },
  [PIE_CHART_DOMAIN_ID]: {
    components: [
      {
        title: "Pie Chart - Basic",
        element: PieChart,
        demo: `const App = () => {
  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return  (
    <PieChart
      type="basic"
      data={{
        labels: ["Legend 1", "Legend 2", "Legend 3"],
        datasets: [
          {
            label: "value",
            data: [
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
            ],
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Pie Chart - Donut",
        element: PieChart,
        demo: `const App = () => {
  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;
        
  return (
    <PieChart
      type="donut"
      data={{
        labels: ["Legend 1", "Legend 2", "Legend 3"],
        datasets: [
          {
            label: "value",
            data: [
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
            ],
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Pie Chart - Polar Area",
        element: PieChart,
        demo: `const App = () => {
  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;
        
  return (
    <PieChart
      type="polar"
      data={{
        labels: ["Legend 1", "Legend 2", "Legend 3"],
        datasets: [
          {
            label: "value",
            data: [
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
            ],
          },
        ],
      }}
    />
  )
}`,
      },
    ],
  },
  [SCATTER_CHART_DOMAIN_ID]: {
    components: [
      {
        title: "Scatter Chart - Basic",
        element: ScatterChart,
        demo: `const App = () => {
  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <ScatterChart
      type="basic"
      data={{
        datasets: [
          {
            label: "Legend 1",
            data: Array.from({ length: 20 }).map(() => ({
              x: util.DateUtility.getRandomDate(),
              y: util.NumberUtility.getRandomNumber(min, max),
            })),
          },
          {
            label: "Legend 2",
            data: Array.from({ length: 20 }).map(() => ({
              x: util.DateUtility.getRandomDate(),
              y: util.NumberUtility.getRandomNumber(min, max),
            })),
          },
          {
            label: "Legend 3",
            data: Array.from({ length: 20 }).map(() => ({
              x: util.DateUtility.getRandomDate(),
              y: util.NumberUtility.getRandomNumber(min, max),
            })),
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Scatter Chart - Bubble",
        element: ScatterChart,
        demo: `const App = () => {
  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <ScatterChart
      type="bubble"
      data={{
        datasets: [
          {
            label: "Legend 1",
            data: Array.from({ length: 20 }).map(() => ({
              x: util.DateUtility.getRandomDate(),
              y: util.NumberUtility.getRandomNumber(min, max),
              r: util.NumberUtility.getRandomNumber(2, 20),
            })),
          },
          {
            label: "Legend 2",
            data: Array.from({ length: 20 }).map(() => ({
              x: util.DateUtility.getRandomDate(),
              y: util.NumberUtility.getRandomNumber(min, max),
              r: util.NumberUtility.getRandomNumber(2, 20),
            })),
          },
          {
            label: "Legend 3",
            data: Array.from({ length: 20 }).map(() => ({
              x: util.DateUtility.getRandomDate(),
              y: util.NumberUtility.getRandomNumber(min, max),
              r: util.NumberUtility.getRandomNumber(2, 20),
            })),
          },
        ],
      }}
    />
  )
}`,
      },
    ],
  },
  [RADAR_CHART_DOMAIN_ID]: {
    components: [
      {
        title: "Radar Chart - Basic",
        element: RadarChart,
        demo: `const App = () => {
  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;

  return (
    <RadarChart
      type="basic"
      data={{
        labels: ["01", "02", "03", "04", "05", "06"],
        datasets: [
          {
            label: "Legend 1",
            data: [
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
            ],
          },
        ],
      }}
    />
  )
}`,
      },
      {
        title: "Radar Chart - Grouped Radar",
        element: RadarChart,
        demo: `const App = () => {
  const min = 1000 * 1000;
  const max = 10 * 1000 * 1000;
  
  return(
    <RadarChart
      type="grouped"
      data={{
        labels: ["01", "02", "03", "04", "05", "06"],
        datasets: [
          {
            label: "Legend 1",
            data: [
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
            ],
          },
          {
            label: "Legend 2",
            data: [
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
            ],
          },
          {
            label: "Legend 3",
            data: [
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
              util.NumberUtility.getRandomNumber(min, max),
            ],
          },
        ],
      }}
    />
  )
}`,
      },
    ],
  },

  [WIDGETUI_DOMAIN_ID]: {
    components: [
      {
        title: "WidgetUI",
        element: WidgetUI,
        demo: `const App = () => {
  return (
    <div
      style={{
        width: 1280,
        height: 768,
      }}
    >
      <WidgetUI
        onDataChange={console.log}
        config={{
          style: {
            gap: 16,
            padding: 32,
          },
          grid: [16, 8],
          widgets: [
            {
              grid: [1, 1],
              component: {
                key: "Test1",
                element: (
                  <div
                    style={{
                      width: "inherit",
                      height: "inherit",
                      background: "red",
                    }}
                  />
                ),
              },
            },
            {
              grid: [2, 2],
              component: {
                key: "Test2",
                element: (
                  <div
                    style={{
                      width: "inherit",
                      height: "inherit",
                      background: "red",
                    }}
                  />
                ),
              },
            },
            {
              grid: [2, 1],
              component: {
                key: "Test3",
                element: (
                  <div
                    style={{
                      width: "inherit",
                      height: "inherit",
                      background: "red",
                    }}
                  />
                ),
              },
            },
          ],
        }}
        data={[]}
      />
    </div>
  )
}`,
      },
    ],
  },

  [TABLE_DOMAIN_ID]: {
    components: [
      {
        title: "Table",
        element: Table,
        demo: `const App = () => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(20);
  const [checkedRows, setCheckedRows] = React.useState([]);

  const dataLength = 10;

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Table
      asKey="column-1"
      isLoading={isLoading}
      checkedRows={checkedRows}
      onCheck={setCheckedRows}
      page={page}
      pageSize={pageSize}
      totalCount={dataLength}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      onRowClick={console.log}
      columns={
        [
          {
            key: "column-1",
            title: "No",
            sorter: (a, b) => {
              return a["column-1"] - b["column-1"];
            },
          },
          {
            key: "column-2",
            title: "출입동",
            sorter: (a, b) => {
              return a["column-3"] - b["column-3"];
            },
          },
          {
            key: "column-3",
            title: "출입호",
          },
          {
            key: "column-4",
            title: "출입종류",
          },
          {
            key: "column-5",
            title: "출입상태",
          },
          {
            key: "column-6",
            title: "출입일시",
          },
        ]
      }
      initialData={Array.from({ length: dataLength }).map((_, index) => {
        return {
          "column-1": index + 1,
          "column-2": 1000 + index + "동",
          "column-3": 100 + index + "호",
          "column-4": "세대카드",
          "column-5": "출입허가",
          "column-6": "2023.08.08 10:10:10",
        };
      })}
      actionButtons={[
        {
          title: "등록",
          onClick: () => alert("등록"),
        },
      ]}
    />
  )
}`,
      },
    ],
    apiDocs: [
      {
        props: "columns",
        description: "컬럼을 정의 합니다.",
        type: "TableColumn[]",
        default: "undefined",
      },
      {
        props: "initialData",
        description: "테이블에 표시할 데이터를 입력합니다.",
        type: "any[]",
        default: "undefined",
      },
      {
        props: "asKey",
        description: "고유 ID값으로 사용되는 column 명을 입력합니다.",
        type: "string",
        default: "id",
      },
      {
        props: "checkedRows",
        description: "현재 선택된 행 데이터를 설정합니다.",
        type: "any[]",
        default: "undefined",
      },
      {
        props: "onCheck",
        description: "체크 상태를 핸들링 합니다.",
        type: "(row: any) => void",
        default: "undefined",
      },
      {
        props: "page",
        description: "현재 페이지 상태를 설정합니다.",
        type: "number",
        default: "undefined",
      },
      {
        props: "pageSize",
        description: "페이지당 크기를 설정합니다.",
        type: "number",
        default: "undefined",
      },
      {
        props: "totalCount",
        description: "데이터의 전체 크기를 설정합니다.",
        type: "number",
        default: "0",
      },
      {
        props: "onPageChange",
        description: "페이지 상태를 핸들링 합니다.",
        type: "(page: number) => void",
        default: "undefined",
      },
      {
        props: "onPageSizeChange",
        description: "페이지 크기 상태를 핸들링 합니다.",
        type: "(pageSize: number) => void",
        default: "undefined",
      },

      {
        props: "actionButtons",
        description: "테이블 캡션 영역에 서브 액션 버튼을 설정합니다.",
        type: "{title: string; onClick: () => void}[]",
        default: "undefined",
      },
    ],
  },
};
