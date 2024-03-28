import { FC, useRef, useState } from "react";
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isSameYear,
} from "date-fns";

import CalendarStyledComponents from "./styled";
import {
  CalendarChildrenContext,
  QuickActionUnit,
  Range,
  RangePickerProps,
} from "./types";

import { colors } from "../../../foundations";

import { RightSVG } from "../../../icons/outlined/arrows";

import { Button, TextButton } from "../../actions";

import Calendar from "./Calendar";
import TimePicker from "../TimePicker";

const {
  Container,
  PickerArea,
  GridArea,
  GridItem,
  StyledTab,
  Footer,
  QuickActionButtonGroup,
} = CalendarStyledComponents;

const getIsInRange = (date: Date, range?: Range) => {
  return !!range
    ? (!!range[0] && isSameDay(date, range[0])) ||
        (!!range[0] && !!range[1] && isSameDay(date, range[1])) ||
        (!!range[0] &&
          !!range[1] &&
          isAfter(date, range[0]) &&
          isBefore(date, range[1]))
    : false;
};

const getSortedRange = (range: Range) =>
  range.sort((a, b) => Number(a) - Number(b));

const RangePicker: FC<RangePickerProps> = ({
  value,
  onChange,
  hasTime,
  rangeQuickButtons,
}) => {
  const [tabState, setTabState] = useState("start");
  const [isShowTime, setIsShowTime] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);

  const handleDateClick = (date: Date) => {
    if (onChange) {
      if (tabState === "start") {
        onChange(getSortedRange([date, value?.[1]]));
        setTabState("end");
      } else {
        onChange(getSortedRange([value?.[0], date]));
        setTabState("start");
      }
    }
  };

  const handleQuickButtonClick = (unit: QuickActionUnit, amount: number) => {
    const startDate = new Date();
    let endDate = new Date();

    if (amount > 0) {
      startDate.setHours(0);
      startDate.setMinutes(0);
      startDate.setSeconds(0);
    } else {
      startDate.setHours(23);
      startDate.setMinutes(59);
      startDate.setSeconds(59);
      endDate.setHours(0);
      endDate.setMinutes(0);
      endDate.setSeconds(0);
    }

    switch (unit) {
      case "date": {
        endDate = addDays(endDate, amount);
        break;
      }
      case "week": {
        endDate = addWeeks(endDate, amount);
        break;
      }
      case "month": {
        endDate = addMonths(endDate, amount);
        break;
      }
      case "year": {
        endDate = addYears(endDate, amount);
        break;
      }
    }

    if (onChange) {
      onChange(getSortedRange([startDate, endDate]));
    }
  };

  const renderDates = (ctx: CalendarChildrenContext) => {
    const { state, calendarHeaderDays, dates, dispatch } = ctx;
    switch (state.type) {
      case "date": {
        return (
          <GridArea theme={{ grid: 7 }}>
            {calendarHeaderDays.map(({ key, label }) => {
              return (
                <GridItem key={key} theme={{ isDay: true }}>
                  <span>{label}</span>
                </GridItem>
              );
            })}
            {dates.map((arr, index) => {
              return arr.map((date) => (
                <GridItem
                  key={date.toString()}
                  theme={{
                    isFirst: !!value && !!value[0] && isSameDay(date, value[0]),
                    isLast: !!value && !!value[1] && isSameDay(date, value[1]),
                    isSelected: getIsInRange(date, value),
                    isSpace: index !== 1,
                    isRange: true,
                  }}
                  onClick={() => {
                    dispatch({ type: "changeDate", payload: date });
                    handleDateClick(date);
                  }}
                >
                  <span>{format(date, "d")}</span>
                </GridItem>
              ));
            })}
          </GridArea>
        );
      }
      case "month": {
        return (
          <GridArea theme={{ grid: 3 }}>
            {Array.from({ length: 12 }).map((_, index) => {
              const currentDate = new Date(state.date);
              currentDate.setMonth(index);

              return (
                <GridItem
                  key={index}
                  theme={{
                    isSelected: isSameMonth(state.date, currentDate),
                  }}
                  onClick={() => {
                    dispatch({ type: "changeMonth", payload: index });
                  }}
                >
                  <span style={{ width: "100%" }}>
                    {format(currentDate, "MM")}
                  </span>
                </GridItem>
              );
            })}
          </GridArea>
        );
      }
      case "year": {
        return (
          <GridArea theme={{ grid: 3 }}>
            {Array.from({ length: 10 }).map((_, index) => {
              const currentYear = state.date.getFullYear();
              const endYear = currentYear - (currentYear % 10);
              const startYear = endYear + 10;

              const currentDate = new Date(state.date);
              currentDate.setFullYear(startYear - index);

              return (
                <GridItem
                  key={index}
                  onClick={() => {
                    dispatch({
                      type: "changeYear",
                      payload: currentDate.getFullYear(),
                    });
                  }}
                  theme={{
                    isSelected: isSameYear(currentDate, state.date),
                  }}
                >
                  <span style={{ width: "100%" }}>
                    {format(currentDate, "yyyy")}
                  </span>
                </GridItem>
              );
            })}
          </GridArea>
        );
      }
    }
  };

  return (
    <Calendar>
      {(ctx) => {
        return (
          <Container
            ref={calendarRef}
            onClick={() => {
              setIsShowTime(false);
            }}
          >
            <PickerArea>
              <StyledTab
                type="box"
                size="medium"
                value={tabState}
                items={[
                  {
                    key: "start",
                    title: "시작일",
                  },
                  {
                    key: "end",
                    title: "종료일",
                  },
                ]}
                onChange={({ key }) => setTabState(key)}
              />
              <Calendar.Navigation type={ctx.state.type} />
              {renderDates(ctx)}
              {ctx.state.type === "date" && (
                <Footer>
                  {rangeQuickButtons && rangeQuickButtons.length > 0 ? (
                    <QuickActionButtonGroup>
                      {rangeQuickButtons.map(
                        ({ amount, title, unit }, index) => {
                          return (
                            <Button
                              key={index}
                              size="x-small"
                              color="gray02"
                              onClick={() => {
                                handleQuickButtonClick(unit, amount);

                                ctx.dispatch({
                                  type: "changeDate",
                                  payload: new Date(),
                                });
                              }}
                            >
                              {title}
                            </Button>
                          );
                        }
                      )}
                    </QuickActionButtonGroup>
                  ) : (
                    <span />
                  )}
                  {hasTime && (
                    <TextButton
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsShowTime(!isShowTime);
                      }}
                      style={{
                        position: "relative",
                        alignItems: "center",
                        color: colors.gray900,
                      }}
                      icon={{
                        position: "trailing",
                        node: <RightSVG width={12} height={12} />,
                      }}
                    >
                      시간 선택
                    </TextButton>
                  )}
                </Footer>
              )}
            </PickerArea>
            {isShowTime && (
              <TimePicker
                style={{ maxHeight: calendarRef.current?.offsetHeight }}
                date={tabState === "start" ? value?.[0] : value?.[1]}
                onDateChange={(date) => {
                  ctx.dispatch({ type: "changeDate", payload: date });

                  if (onChange) {
                    if (tabState === "start") {
                      onChange([date, value?.[1]]);
                    } else {
                      onChange([value?.[0], date]);
                    }
                  }
                }}
                hasDate
                onClick={(e) => e.stopPropagation()}
                onOkClick={() => setIsShowTime(false)}
              />
            )}
          </Container>
        );
      }}
    </Calendar>
  );
};

RangePicker.displayName = "RangePicker";

export default RangePicker;
