import { format } from "date-fns";
import { FC, useState } from "react";

import { InputRangePickerProps } from "./types";
import InputDatePickerStyledComponents from "./styled";

import { Dialog } from "../../../core";
import { RangePicker } from "../../selection";

import CalendarSVG from "../../../icons/outlined/edit/CalendarSVG";

const { Container, InputArea } = InputDatePickerStyledComponents;

const placeholderDate = new Date();
placeholderDate.setMonth(0);
placeholderDate.setDate(1);
placeholderDate.setHours(0);
placeholderDate.setMinutes(0);

const getFormatDateByHasTime = (date: Date, hasTime: boolean) => {
  return format(date, hasTime ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd");
};

const InputRangePicker: FC<InputRangePickerProps> = ({
  value,
  onChange,
  hasTime,
  size,
  isDisabled,
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
                  {
                    <>
                      <input
                        value={
                          value?.[0]
                            ? getFormatDateByHasTime(value[0], !!hasTime)
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
                          value?.[1]
                            ? getFormatDateByHasTime(value[1], !!hasTime)
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
                  }
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
                    <RangePicker
                      value={value}
                      onChange={onChange}
                      hasTime={hasTime}
                      rangeQuickButtons={rangeQuickButtons}
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

InputRangePicker.displayName = "InputRangePicker";

export default InputRangePicker;
