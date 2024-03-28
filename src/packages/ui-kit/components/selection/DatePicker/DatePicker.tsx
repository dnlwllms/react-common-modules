import {
  getDaysInMonth,
  startOfMonth,
  format,
  addMonths,
  addYears,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isSameYear,
  addDays,
  addWeeks,
} from "date-fns";

import { FC, Fragment, useEffect, useMemo, useState } from "react";

import { ArrowType, DatePickerProps, QuickActionUnit, Range } from "./types";
import DatePickerStyledComponents from "./styled";

import { Button, TextButton } from "../../actions";

import { TabItem } from "../../navigation/Tab";

import {
  DoubleLeftSVG,
  DoubleRightSVG,
  LeftSVG,
  RightSVG,
} from "../../../icons/outlined/arrows";
import { colors } from "../../../foundations";
import TimePicker from "../TimePicker";

const {
  Container,
  DatePickerArea,
  SelectArea,
  GridArea,
  GridItem,
  DateArea,
  ArrowButtonGroup,
  ArrowButton,
  StyledTab,
  Footer,
  QuickActionButtonGroup,
} = DatePickerStyledComponents;

const sevenDays = [
  {
    key: "sunday",
    label: "S",
  },
  {
    key: "monday",
    label: "M",
  },
  {
    key: "tuesday",
    label: "T",
  },
  {
    key: "wednesday",
    label: "W",
  },
  {
    key: "thursday",
    label: "T",
  },
  {
    key: "friday",
    label: "F",
  },
  {
    key: "saturday",
    label: "S",
  },
];

const DatePicker: FC<DatePickerProps> = ({
  onDateChange,
  onRangeChange,
  onTimePickerOkClick,
  hasRange,
  hasTime,
  rangeQuickButtons,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    setIsMobile(navigator.userAgent.includes("Mobile"));
  }, []);

  const [tabState, setTabState] = useState<"start" | "end">("start");

  const [viewState, setViewState] = useState<"year" | "month" | "date">("date");

  const [date, setDate] = useState<Date>(props.date || new Date());

  const [range, setRange] = useState<Range>(
    props.range || [undefined, undefined]
  );

  const start = useMemo<Date>(() => startOfMonth(date), [date]);

  const days = getDaysInMonth(date);

  const handleTabChange = (tabItem: TabItem) => {
    setTabState(tabItem.key as typeof tabState);
  };

  const handleViewState = () => {
    switch (viewState) {
      case "date": {
        setViewState("month");
        break;
      }
      case "month": {
        setViewState("year");
        break;
      }
    }
  };

  const handleDateClick = (currentDate: Date) => {
    if (hasRange) {
      if (tabState === "start") {
        setRange((prev) => {
          prev[0] = currentDate;
          return [...prev.sort((a, b) => Number(a) - Number(b))];
        });
        setTabState("end");

        if (onRangeChange) {
          onRangeChange([currentDate, range[1]]);
        }
      } else {
        setRange((prev) => {
          prev[1] = currentDate;
          return [...prev.sort((a, b) => Number(a) - Number(b))];
        });

        if (onRangeChange) {
          onRangeChange([range[0], currentDate]);
        }
      }
    } else {
      setDate(currentDate);

      if (onDateChange) {
        onDateChange(currentDate);
      }
    }
  };

  const handleMonthClick = (currentDate: Date) => {
    setDate(currentDate);
    setViewState("date");
  };

  const handleYearClick = (currentDate: Date) => {
    setDate(currentDate);
    setViewState("month");
  };

  const handleArrowClick = (type: ArrowType) => {
    switch (type) {
      case "doubleLeftYear": {
        setDate((prev) => addYears(prev, -10));
        break;
      }
      case "doubleRightYear":
        setDate((prev) => addYears(prev, 10));
        break;
      case "doubleLeft": {
        setDate((prev) => addYears(prev, -1));
        break;
      }
      case "doubleRight":
        setDate((prev) => addYears(prev, 1));
        break;
      case "left":
        setDate((prev) => addMonths(prev, -1));
        break;
      case "right":
        setDate((prev) => addMonths(prev, 1));
        break;
    }
  };

  const handleQuickButtonClick = (unit: QuickActionUnit, amount: number) => {
    let newDate = new Date();

    switch (unit) {
      case "date": {
        newDate = addDays(newDate, amount);
        break;
      }
      case "week": {
        newDate = addWeeks(newDate, amount);
        break;
      }
      case "month": {
        newDate = addMonths(newDate, amount);
        break;
      }
      case "year": {
        newDate = addYears(newDate, amount);
        break;
      }
    }

    setDate(new Date());
    setRange(
      [new Date(), newDate].sort((a, b) => Number(a) - Number(b)) as Range
    );
  };

  const isRangeSelected = (date: Date) => {
    return (
      (!!range[0] && isSameDay(date, range[0])) ||
      (!!range[0] && !!range[1] && isSameDay(date, range[1])) ||
      (!!range[0] &&
        !!range[1] &&
        isAfter(date, range[0]) &&
        isBefore(date, range[1]))
    );
  };

  const [isShowTime, setIsShowTime] = useState(false);

  const renderByViewState = () => {
    switch (viewState) {
      case "year": {
        const currentYear = date.getFullYear();
        const endYear = currentYear - (currentYear % 10);
        const startYear = endYear + 10;

        return (
          <Fragment>
            <SelectArea>
              <ArrowButton onClick={() => handleArrowClick("doubleLeftYear")}>
                <DoubleLeftSVG />
              </ArrowButton>
              <DateArea>
                <span>
                  {startYear} ~ {endYear}
                </span>
              </DateArea>
              <ArrowButton onClick={() => handleArrowClick("doubleRightYear")}>
                <DoubleRightSVG />
              </ArrowButton>
            </SelectArea>
            <GridArea theme={{ grid: 3 }}>
              {Array.from({ length: 10 }).map((_, index) => {
                const currentDate = new Date(date);
                currentDate.setFullYear(startYear - index);

                return (
                  <GridItem
                    key={index}
                    onClick={() => handleYearClick(currentDate)}
                    theme={{
                      isSelected: isSameYear(currentDate, date),
                    }}
                  >
                    <span style={{ width: "100%" }}>
                      {format(currentDate, "yyyy")}
                    </span>
                  </GridItem>
                );
              })}
            </GridArea>
          </Fragment>
        );
      }
      case "month": {
        return (
          <Fragment>
            <SelectArea>
              <ArrowButton onClick={() => handleArrowClick("doubleLeft")}>
                <DoubleLeftSVG />
              </ArrowButton>
              <DateArea onClick={handleViewState}>
                <span>{format(date, "yyyy")}년</span>
              </DateArea>
              <ArrowButton onClick={() => handleArrowClick("doubleRight")}>
                <DoubleRightSVG />
              </ArrowButton>
            </SelectArea>
            <GridArea theme={{ grid: 3 }}>
              {Array.from({ length: 12 }).map((_, index) => {
                const currentDate = new Date(date);
                currentDate.setMonth(index);

                return (
                  <GridItem
                    key={index}
                    onClick={() => handleMonthClick(currentDate)}
                    theme={{
                      isSelected: isSameMonth(currentDate, date),
                    }}
                  >
                    <span style={{ width: "100%" }}>
                      {format(currentDate, "MM")}
                    </span>
                  </GridItem>
                );
              })}
            </GridArea>
          </Fragment>
        );
      }
      case "date":
      default: {
        return (
          <Fragment>
            {hasRange && (
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
                onChange={handleTabChange}
              />
            )}
            <SelectArea>
              <ArrowButtonGroup>
                <ArrowButton onClick={() => handleArrowClick("doubleLeft")}>
                  <DoubleLeftSVG />
                </ArrowButton>
                <ArrowButton onClick={() => handleArrowClick("left")}>
                  <LeftSVG />
                </ArrowButton>
              </ArrowButtonGroup>
              <DateArea onClick={handleViewState}>
                <span>{format(date, "yyyy")}년</span>
                <span>{format(date, "MM")}월</span>
              </DateArea>
              <ArrowButtonGroup>
                <ArrowButton onClick={() => handleArrowClick("right")}>
                  <RightSVG />
                </ArrowButton>
                <ArrowButton onClick={() => handleArrowClick("doubleRight")}>
                  <DoubleRightSVG />
                </ArrowButton>
              </ArrowButtonGroup>
            </SelectArea>
            <GridArea theme={{ grid: 7 }}>
              {sevenDays.map(({ key, label }) => {
                return (
                  <GridItem key={key} theme={{ isDay: true }}>
                    <span>{label}</span>
                  </GridItem>
                );
              })}
              {Array.from({ length: start.getDay() }).map((_, index) => {
                const currentDate = new Date(date);
                currentDate.setDate(1 + index - start.getDay());

                return (
                  <GridItem
                    key={`before-space-${index}`}
                    onClick={() => handleDateClick(currentDate)}
                    theme={{
                      isSelected: hasRange
                        ? isRangeSelected(currentDate)
                        : isSameDay(currentDate, date),
                      isSpace: true,
                      isFirst:
                        hasRange &&
                        range[0] &&
                        isSameDay(currentDate, range[0]),
                      isLast:
                        hasRange &&
                        range[1] &&
                        isSameDay(currentDate, range[1]),
                      hasRange,
                    }}
                  >
                    <span>{format(currentDate, "d")}</span>
                  </GridItem>
                );
              })}
              {Array.from({ length: days }).map((_, index) => {
                const currentDate = new Date(date);
                currentDate.setDate(index + 1);

                return (
                  <GridItem
                    key={index}
                    onClick={() => handleDateClick(currentDate)}
                    theme={{
                      isSelected: hasRange
                        ? isRangeSelected(currentDate)
                        : isSameDay(currentDate, date),
                      isFirst:
                        hasRange &&
                        range[0] &&
                        isSameDay(currentDate, range[0]),
                      isLast:
                        hasRange &&
                        range[1] &&
                        isSameDay(currentDate, range[1]),
                      hasRange,
                    }}
                  >
                    <span>{format(currentDate, "d")}</span>
                  </GridItem>
                );
              })}
              {Array.from({
                length: (7 - ((days + start.getDay()) % 7)) % 7,
              }).map((_, index) => {
                const currentDate = new Date(date);
                currentDate.setDate(days + index + 1);

                return (
                  <GridItem
                    key={`after-space-${index}`}
                    onClick={() => handleDateClick(currentDate)}
                    theme={{
                      isSelected: hasRange
                        ? isRangeSelected(currentDate)
                        : isSameDay(currentDate, date),
                      isSpace: true,
                      isFirst:
                        hasRange &&
                        range[0] &&
                        isSameDay(currentDate, range[0]),
                      isLast:
                        hasRange &&
                        range[1] &&
                        isSameDay(currentDate, range[1]),
                      hasRange,
                    }}
                  >
                    <span>{format(currentDate, "d")}</span>
                  </GridItem>
                );
              })}
            </GridArea>
            <Footer>
              {hasRange && rangeQuickButtons && rangeQuickButtons.length > 0 ? (
                <QuickActionButtonGroup>
                  {rangeQuickButtons.map(({ amount, title, unit }, index) => {
                    return (
                      <Button
                        key={index}
                        size="x-small"
                        color="gray02"
                        onClick={() => handleQuickButtonClick(unit, amount)}
                      >
                        {title}
                      </Button>
                    );
                  })}
                </QuickActionButtonGroup>
              ) : (
                <span />
              )}
              {hasTime &&
                (isMobile ? (
                  <TextButton
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
                    <span>시간 선택</span>
                    <input
                      type="time"
                      style={{
                        position: "absolute",
                        opacity: 0,
                        top: 0,
                        left: 0,
                      }}
                    />
                  </TextButton>
                ) : (
                  <TextButton
                    onClick={() => setIsShowTime(!isShowTime)}
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
                ))}
            </Footer>
          </Fragment>
        );
      }
    }
  };
  return (
    <Container style={{ height: hasRange ? 422 : 370 }}>
      <DatePickerArea>{renderByViewState()}</DatePickerArea>
      {isShowTime && (
        <TimePicker
          hasDate
          date={hasRange ? (tabState === "start" ? range[0] : range[1]) : date}
          onDateChange={(date) => {
            if (hasRange) {
              const newRange = range.concat() as Range;
              if (tabState === "start") {
                newRange[0] = date;
                setRange(newRange);
              } else {
                newRange[1] = date;
                setRange(newRange);
              }

              if (onRangeChange) {
                onRangeChange(newRange);
              }
            } else {
              setDate(date);

              if (onDateChange) {
                onDateChange(date);
              }
            }
          }}
          onOkClick={onTimePickerOkClick}
        />
      )}
    </Container>
  );
};

DatePicker.displayName = "DatePicker";

export default DatePicker;
