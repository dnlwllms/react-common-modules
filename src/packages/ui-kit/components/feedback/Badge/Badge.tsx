import { FC, useMemo } from "react";

import { BadgeProps } from "./types";
import BadgeStyledComponents from "./styled";

const { Container, BadgeArea, SmallBadgeArea } = BadgeStyledComponents;

const Badge: FC<BadgeProps> = ({ value, visible = true, children }) => {
  const badgeValue = useMemo(() => {
    if (Number(value) > 0) {
      if (Number(value) > 999) {
        return "999+";
      } else {
        return value;
      }
    } else if (typeof value === "string") {
      if (value === "") {
        return null;
      } else {
        return value;
      }
    } else {
      return null;
    }
  }, [value]);

  return (
    <Container>
      {visible && (
        <>
          {badgeValue === null ? (
            <SmallBadgeArea />
          ) : (
            <BadgeArea theme={{ length: String(value).length }}>
              <span>{badgeValue}</span>
            </BadgeArea>
          )}
        </>
      )}
      {children}
    </Container>
  );
};

Badge.displayName = "Badge";

export default Badge;
