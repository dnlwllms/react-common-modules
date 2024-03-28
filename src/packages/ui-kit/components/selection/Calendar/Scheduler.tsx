import { FC, useMemo, useState } from "react";
import { format, isSameDay } from "date-fns";

import { SchedulerProps } from "./types";
import CalendarStyledComponents from "./styled";

import Calendar from "./Calendar";
import DatePicker from "./DatePicker";

import { Empty } from "../../feedback";

const {
  SchedulerContainer,
  SchedulerLeftArea,
  SchedulerRightArea,
  ScheduleGrid,
  ScheduleGridItem,
  ScheduleDate,
  ScheduleArea,
  ScheduleTitle,
  ScheduleList,
  ScheduleListItem,
  ScheduleAddInfo,
  ScheduleDetailList,
  ScheduleDetailListItem,
} = CalendarStyledComponents;

const Scheduler: FC<SchedulerProps> = ({
  date = new Date(),
  onChange,
  schedules,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);

  const selectedSchedule = useMemo(
    () =>
      schedules.filter((schedule) => isSameDay(schedule.date, selectedDate)),
    [schedules, selectedDate]
  );

  return (
    <Calendar date={date}>
      {(ctx) => {
        return (
          <SchedulerContainer>
            <SchedulerLeftArea>
              <ScheduleGrid theme={{ grid: 7 }}>
                {ctx.calendarHeaderDays.map(({ key, label }) => {
                  return (
                    <ScheduleGridItem key={key} theme={{ isDay: true }}>
                      <ScheduleDate theme={{ isDay: true }}>
                        {label}
                      </ScheduleDate>
                    </ScheduleGridItem>
                  );
                })}
                {ctx.dates.map((arr, index) => {
                  return arr.map((date) => {
                    const isCurrentMonth = index === 1;

                    const schedule = schedules.filter((schedule) =>
                      isSameDay(schedule.date, date)
                    );

                    return (
                      <ScheduleGridItem
                        key={date.toString()}
                        theme={{
                          isSpace: !isCurrentMonth,
                          isSelected: isSameDay(date, selectedDate),
                        }}
                      >
                        <ScheduleDate
                          theme={{
                            isSpace: !isCurrentMonth,
                            isSelected: isSameDay(selectedDate, date),
                          }}
                        >
                          {format(date, "d")}
                        </ScheduleDate>
                        <ScheduleList>
                          {schedule.slice(0, 2).map(({ key, title }) => {
                            return (
                              <ScheduleListItem
                                theme={{
                                  isSpace: !isCurrentMonth,
                                }}
                                key={key}
                              >
                                {title}
                              </ScheduleListItem>
                            );
                          })}
                        </ScheduleList>
                        {schedule.length > 2 && (
                          <ScheduleAddInfo>
                            +{schedule.length - 2}건
                          </ScheduleAddInfo>
                        )}
                      </ScheduleGridItem>
                    );
                  });
                })}
              </ScheduleGrid>
            </SchedulerLeftArea>
            <SchedulerRightArea>
              <DatePicker
                value={selectedDate}
                onChange={setSelectedDate}
                onNavigate={(date) => {
                  ctx.dispatch({ type: "changeDate", payload: date });

                  if (onChange) {
                    onChange(date);
                  }
                }}
              />
              <ScheduleArea>
                <ScheduleTitle>
                  {format(selectedDate, "MM월 dd일")}
                </ScheduleTitle>

                {selectedSchedule.length > 0 ? (
                  <ScheduleDetailList>
                    {selectedSchedule.map(({ key, date, title }) => {
                      return (
                        <ScheduleDetailListItem key={key}>
                          <div className="container">
                            <div className="title">{title}</div>
                            <div className="date">
                              {format(date, "yyyy.MM.dd")}
                            </div>
                          </div>
                        </ScheduleDetailListItem>
                      );
                    })}
                  </ScheduleDetailList>
                ) : (
                  <Empty
                    style={{ height: "auto" }}
                    size="small"
                    description="이 날짜에 일정이 없습니다."
                  />
                )}
              </ScheduleArea>
            </SchedulerRightArea>
          </SchedulerContainer>
        );
      }}
    </Calendar>
  );
};

Scheduler.displayName = "Scheduler";

export default Scheduler;
