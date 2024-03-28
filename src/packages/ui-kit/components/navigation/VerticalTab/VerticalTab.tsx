import { FC, useEffect, useRef, useState } from "react";

import { VerticalTabItem, VerticalTabProps } from "./types";
import VerticalTabStyledComponents from "./styled";

const {
  Container,
  Indicator,
  VerticalTabList,
  VerticalTabListItem,
  VerticalTabListIcon,
} = VerticalTabStyledComponents;

const VerticalTab: FC<VerticalTabProps> = ({
  items,
  onChange,
  value = items[0].key,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const liRef = useRef<HTMLLIElement>(null);

  const handleClick = (item: VerticalTabItem) => {
    if (onChange) {
      onChange(item);
    }
  };

  const [liHeight, setLiHeight] = useState(0);
  const [liTop, setLiTop] = useState(0);

  useEffect(() => {
    if (liRef.current) {
      const target = liRef.current;

      setLiHeight(target.offsetHeight);
      setLiTop(target.offsetTop);
    }
  }, [value]);

  return (
    <Container ref={containerRef}>
      <Indicator
        style={{
          height: liHeight,
          top: liTop,
        }}
      />
      <VerticalTabList>
        {items.map((item) => {
          const { key, title, icon } = item;

          return (
            <VerticalTabListItem
              key={key}
              theme={{ isActive: key === value }}
              ref={key === value ? liRef : undefined}
              onClick={() => handleClick(item)}
            >
              {icon ? (
                <VerticalTabListIcon theme={{ isActive: key === value }}>
                  {icon}
                </VerticalTabListIcon>
              ) : (
                ""
              )}
              {title}
            </VerticalTabListItem>
          );
        })}
      </VerticalTabList>
    </Container>
  );
};

VerticalTab.displayName = "VerticalTab";

export default VerticalTab;
