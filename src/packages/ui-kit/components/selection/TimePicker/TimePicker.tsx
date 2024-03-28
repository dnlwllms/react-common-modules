import { format } from "date-fns";

import { FC, useEffect, useState } from "react";

import { TimePickerProps } from "./types";
import TimePickerStyledComponents from "./styled";
import { Button } from "../../actions";

const {
  Container,
  DateArea,
  TimeArea,
  Header,
  SelectArea,
  TimeRow,
  TimeButton,
  Footer,
  LabelContainer,
} = TimePickerStyledComponents;

const TimePicker: FC<TimePickerProps> = ({
  date: initialDate,
  onDateChange,
  onOkClick,
  hasDate,
  ...props
}) => {
  const [date, setDate] = useState<Date>(initialDate || new Date());

  useEffect(() => {
    setDate(initialDate || new Date());
  }, [initialDate]);

  const handleHourClick = (hour: number) => {
    const newDate = new Date(date);
    newDate.setHours(hour);
    setDate(newDate);

    if (onDateChange) onDateChange(newDate);
  };

  const handleMinuteClick = (minute: number) => {
    const newDate = new Date(date);
    newDate.setMinutes(minute);
    setDate(newDate);

    if (onDateChange) onDateChange(newDate);
  };

  const handleClick = () => {
    if (onOkClick) {
      onOkClick();
    }
  };

  return (
    <Container {...props}>
      <Header>
        {hasDate && <DateArea>{format(date, "yyyy.MM.dd")}</DateArea>}
        <TimeArea>{format(date, "HH:mm")}</TimeArea>
        {!hasDate && (
          <LabelContainer>
            <span>hour</span>
            <span>minute</span>
          </LabelContainer>
        )}
      </Header>
      <SelectArea>
        <TimeRow
          theme={{
            hasDate,
          }}
        >
          {Array.from({ length: 24 }).map((_, index) => {
            return (
              <TimeButton
                key={index}
                theme={{
                  isSelected: date.getHours() === index,
                }}
                onClick={() => handleHourClick(index)}
              >
                {index < 10 ? `0${index}` : index}
              </TimeButton>
            );
          })}
        </TimeRow>
        <TimeRow
          theme={{
            hasDate,
          }}
        >
          {Array.from({ length: 60 }).map((_, index) => {
            return (
              <TimeButton
                key={index}
                theme={{
                  isSelected: date.getMinutes() === index,
                }}
                onClick={() => handleMinuteClick(index)}
              >
                {index < 10 ? `0${index}` : index}
              </TimeButton>
            );
          })}
        </TimeRow>
      </SelectArea>
      <Footer>
        <Button size="x-small" color="gray01" onClick={handleClick}>
          OK
        </Button>
      </Footer>
    </Container>
  );
};

TimePicker.displayName = "TimePicker";

export default TimePicker;
