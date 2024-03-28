import { FC } from "react";

import { PaginationProps } from "./types";
import PaginationStyledComponents from "./styled";
import {
  LeftSVG,
  RightSVG,
  DoubleLeftSVG,
  DoubleRightSVG,
} from "../../../icons/outlined/arrows";
import { colors } from "../../../foundations";

const {
  BasicContainer,
  DotContainer,
  NumberContainer,
  Dot,
  ArrowButton,
  BasicPageContainer,
  NumericPageContainer,
  NumericPage,
} = PaginationStyledComponents;

const Pagination: FC<PaginationProps> = ({
  type = "number",
  color = "gray01",
  total = 1,
  current = 1,
  onChange,
  numericOptions = {
    max: 5,
  },
}) => {
  switch (type) {
    case "basic": {
      const handlePrev = () => {
        if (onChange) {
          if (current > 1) {
            onChange(current - 1);
          }
        }
      };

      const handleNext = () => {
        if (onChange) {
          if (current < total) {
            onChange(current + 1);
          }
        }
      };

      return (
        <BasicContainer>
          <ArrowButton onClick={handlePrev}>
            <LeftSVG width={14} height={14} />
          </ArrowButton>
          <BasicPageContainer>
            <span>{current}</span>
            <span>/</span>
            <span>{total}</span>
          </BasicPageContainer>
          <ArrowButton onClick={handleNext}>
            <RightSVG width={14} height={14} />
          </ArrowButton>
        </BasicContainer>
      );
    }
    case "numeric": {
      const max = numericOptions.max || 5;
      const start = max * Math.floor((current - 1) / max) + 1;

      const handleFirst = () => {
        if (onChange) {
          if (current > 1) {
            onChange(1);
          }
        }
      };

      const handlePrev = () => {
        if (onChange) {
          if (start - max >= 1) {
            onChange(start - max);
          }
        }
      };

      const handleNext = () => {
        if (onChange) {
          if (start + max <= total) {
            onChange(start + max);
          }
        }
      };

      const handleLast = () => {
        if (onChange) {
          if (current < total) {
            onChange(total);
          }
        }
      };

      const handlePageClick = (page: number) => {
        if (onChange) {
          onChange(page);
        }
      };

      return (
        <BasicContainer>
          <ArrowButton onClick={handleFirst} disabled={start === 1}>
            <DoubleLeftSVG
              width={14}
              height={14}
              fill={start === 1 ? colors.gray200 : colors.gray900}
            />
          </ArrowButton>
          <ArrowButton onClick={handlePrev} disabled={start === 1}>
            <LeftSVG
              width={14}
              height={14}
              fill={start === 1 ? colors.gray200 : colors.gray900}
            />
          </ArrowButton>
          <NumericPageContainer>
            {Array.from({ length: max }).map((_, index) => {
              if (start + index > total) {
                return null;
              }

              return (
                <NumericPage
                  key={index}
                  theme={{
                    isActive: start + index === current,
                  }}
                  onClick={() => handlePageClick(start + index)}
                >
                  {start + index}
                </NumericPage>
              );
            })}
          </NumericPageContainer>
          <ArrowButton onClick={handleNext} disabled={start + max > total}>
            <RightSVG
              width={14}
              height={14}
              fill={start + max > total ? colors.gray200 : colors.gray900}
            />
          </ArrowButton>
          <ArrowButton onClick={handleLast} disabled={start + max > total}>
            <DoubleRightSVG
              width={14}
              height={14}
              fill={start + max > total ? colors.gray200 : colors.gray900}
            />
          </ArrowButton>
        </BasicContainer>
      );
    }
    case "dot":
      return (
        <DotContainer>
          {Array.from({ length: total }).map((_, index) => {
            const isActive = index + 1 === current;

            return (
              <Dot
                key={index}
                theme={{
                  isActive,
                }}
                onClick={() => {
                  if (onChange) {
                    onChange(index + 1);
                  }
                }}
              />
            );
          })}
        </DotContainer>
      );
    case "number":
    default:
      return (
        <NumberContainer theme={{ color }}>
          {current}/{total}
        </NumberContainer>
      );
  }
};

Pagination.displayName = "Pagination";

export default Pagination;
