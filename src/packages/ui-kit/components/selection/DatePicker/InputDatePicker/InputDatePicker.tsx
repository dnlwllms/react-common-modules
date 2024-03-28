import { FC, useState } from "react";

import { InputDatePickerProps } from "./types";
import InputDatePickerStyledComponents from "./styled";
import CalendarSVG from "../../../../icons/outlined/edit/CalendarSVG";
import { Dialog } from "../../../../core";
import DatePicker from "../DatePicker";
import { format } from "date-fns";

const { Container, InputArea } = InputDatePickerStyledComponents;

const placeholderDate = new Date();
placeholderDate.setMonth(0);
placeholderDate.setDate(1);
placeholderDate.setHours(0);
placeholderDate.setMinutes(0);

const getFormatDateByHasTime = (date: Date, hasTime: boolean) => {
  return format(date, hasTime ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd");
};

const InputDatePicker: FC<InputDatePickerProps> = ({
  date,
  hasRange,
  hasTime,
  size,
  isDisabled,
  onDateChange,
  onRangeChange,
  onTimePickerOkClick,
  range,
  rangeQuickButtons,

  ...props
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Dialog>
      {({ handleClose, triggerRect, isOpen }) => {
        return (
          <>
            <Dialog.Trigger>
              <Container
                {...props}
                theme={{
                  size,
                  isDisabled,
                  isSelected,
                  isOpen,
                }}
                onClick={() => {
                  setIsSelected(false);
                }}
              >
                <InputArea theme={{ isOpen, isDisabled }}>
                  {hasRange ? (
                    <>
                      <input
                        value={
                          range?.[0]
                            ? getFormatDateByHasTime(range[0], !!hasTime)
                            : ""
                        }
                        disabled={isDisabled}
                        placeholder={getFormatDateByHasTime(
                          placeholderDate,
                          !!hasTime
                        )}
                        readOnly
                      />
                      <span>~</span>
                      <input
                        value={
                          range?.[1]
                            ? getFormatDateByHasTime(range[1], !!hasTime)
                            : ""
                        }
                        disabled={isDisabled}
                        placeholder={getFormatDateByHasTime(
                          placeholderDate,
                          !!hasTime
                        )}
                        readOnly
                      />
                    </>
                  ) : (
                    <input
                      value={
                        date ? getFormatDateByHasTime(date, !!hasTime) : ""
                      }
                      disabled={isDisabled}
                      placeholder={getFormatDateByHasTime(
                        placeholderDate,
                        !!hasTime
                      )}
                      readOnly
                    />
                  )}
                </InputArea>
                <CalendarSVG width={14} height={14} />
              </Container>
            </Dialog.Trigger>
            {!isDisabled && (
              <Dialog.Body>
                <Dialog.Body.Popup
                  handleClose={handleClose}
                  triggerRect={triggerRect}
                  positionOption={{
                    topMargin: triggerRect?.height,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    }}
                  >
                    <DatePicker
                      date={date}
                      hasRange={hasRange}
                      hasTime={hasTime}
                      onDateChange={onDateChange}
                      onRangeChange={onRangeChange}
                      range={range}
                      rangeQuickButtons={rangeQuickButtons}
                      onTimePickerOkClick={() => {
                        handleClose();
                        if (onTimePickerOkClick) {
                          onTimePickerOkClick();
                        }
                      }}
                    />
                  </div>
                </Dialog.Body.Popup>
              </Dialog.Body>
            )}
          </>
        );
      }}
    </Dialog>
  );
};

InputDatePicker.displayName = "InputDatePicker";

export default InputDatePicker;
