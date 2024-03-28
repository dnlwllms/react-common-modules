import { FC, cloneElement } from "react";

import { BreadcrumbProps, BreadcrumbItem } from "./types";
import BreadcrumbStyledComponents from "./styled";

import HomeSVG from "../../../icons/filled/base/HomeSVG";
import RightSVG from "../../../icons/outlined/arrows/RightSVG";

const { Container, ListItem } = BreadcrumbStyledComponents;

const Breadcrumb: FC<BreadcrumbProps> = ({ items, as }) => {
  const renderAnchorTag = (item: BreadcrumbItem, isHome: boolean) => {
    if (isHome) {
      return as ? (
        cloneElement(as(item), {
          children: (
            <>
              <HomeSVG width={14} height={14} />
              <span>{item.title}메인 이동 아이콘</span>
            </>
          ),
        })
      ) : (
        <a href={item.link}>
          <HomeSVG width={14} height={14} />
          <span>{item.title}메인 이동 아이콘</span>
        </a>
      );
    } else {
      return as ? (
        cloneElement(as(item), {
          children: item.title,
        })
      ) : (
        <a href={item.link}>{item.title}</a>
      );
    }
  };

  return (
    <Container>
      {items.map((item, index) => {
        if (index === 0) {
          return (
            <ListItem theme={{ link: item.link }} key={item.key}>
              {renderAnchorTag(item, true)}
            </ListItem>
          );
        } else {
          return (
            <ListItem theme={{ link: item.link }} key={item.key}>
              <RightSVG width={14} height={14} />
              {renderAnchorTag(item, false)}
            </ListItem>
          );
        }
      })}
    </Container>
  );
};

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
