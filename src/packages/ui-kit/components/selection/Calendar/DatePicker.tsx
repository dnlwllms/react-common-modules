import { FC, useRef, useState } from "react";
import { format, isSameDay, isSameMonth, isSameYear } from "date-fns";

import CalendarStyledComponents from "./styled";
import { CalendarChildrenContext, DatePickerProps } from "./types";

import { colors } from "../../../foundations";

import { RightSVG } from "../../../icons/outlined/arrows";

import { TextButton } from "../../actions";

import Calendar from "./Calendar";
import TimePicker from "../TimePicker";

const { Container, PickerArea, GridArea, GridItem, Footer } =
  CalendarStyledComponents;

const DatePicker: FC<DatePickerProps> = ({
  value,
  hasTime,
  onChange,
  onNavigate,
}) => {
  const [isShowTime, setIsShowTime] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);

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
                    isSpace: index !== 1,
                    isSelected: value ? isSameDay(value, date) : false,
                  }}
                  onClick={() => {
                    dispatch({ type: "changeDate", payload: date });
                    if (onChange) {
                      onChange(date);
                    }
                    if (onNavigate) {
                      onNavigate(date);
                    }
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

                    if (onNavigate) {
                      onNavigate(currentDate);
                    }
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

                    if (onNavigate) {
                      onNavigate(currentDate);
                    }
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
    <Calendar date={value}>
      {(ctx) => {
        return (
          <Container
            ref={calendarRef}
            onClick={() => {
              setIsShowTime(false);
            }}
          >
            <PickerArea>
              <Calendar.Navigation
                type={ctx.state.type}
                onNavigate={onNavigate}
              />
              {renderDates(ctx)}
              {hasTime && ctx.state.type === "date" && (
                <Footer>
                  <span />
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
                </Footer>
              )}
            </PickerArea>
            {isShowTime && (
              <TimePicker
                style={{ maxHeight: calendarRef.current?.offsetHeight }}
                date={value}
                onDateChange={(date) => {
                  ctx.dispatch({ type: "changeDate", payload: date });

                  if (onChange) {
                    onChange(date);
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

DatePicker.displayName = "DatePicker";

export default DatePicker;
