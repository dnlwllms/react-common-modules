import { FC, useEffect, useRef, useState } from "react";

import { TabItem, TabProps } from "./types";
import TabStyledComponents from "./styled";

const { Container, Wrap, Indicator, TabList, TabListItem } =
  TabStyledComponents;

const Tab: FC<TabProps> = ({
  type = "text",
  size = "medium",
  items,
  onChange,
  value = items[0].key,
  isAutoFocus,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const liRef = useRef<HTMLLIElement>(null);

  const handleClick = (item: TabItem) => {
    if (onChange) {
      onChange(item);
    }
  };

  const [liWidth, setLiWidth] = useState(0);
  const [liLeft, setLiLeft] = useState(0);

  useEffect(() => {
    if (liRef.current) {
      const target = liRef.current;

      setLiWidth(target.offsetWidth);
      setLiLeft(target.offsetLeft);

      if (isAutoFocus) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [isAutoFocus, value, size, type]);

  return (
    <Container {...props} ref={containerRef} theme={{ type, size }}>
      <Wrap>
        <TabList ref={ulRef} theme={{ type, size }}>
          {items.map((item) => {
            const { key, title } = item;

            return (
              <TabListItem
                key={key}
                theme={{ type, size, isActive: key === value }}
                ref={key === value ? liRef : undefined}
                onClick={() => handleClick(item)}
              >
                {title}
              </TabListItem>
            );
          })}
        </TabList>
        <Indicator
          key={value}
          theme={{ type, size }}
          style={{
            width:
              type === "text"
                ? liWidth - 32 - (ulRef.current?.scrollLeft || 0)
                : liWidth,
            left: type === "text" ? liLeft + 16 : liLeft,
          }}
        />
      </Wrap>
    </Container>
  );
};

Tab.displayName = "Tab";

export default Tab;
