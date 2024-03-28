import { format, isValid, parse } from "date-fns";
import { FC, useEffect, useState } from "react";

import { InputDatePickerProps } from "./types";
import InputDatePickerStyledComponents from "./styled";

import { Dialog } from "../../../core";
import CalendarSVG from "../../../icons/outlined/edit/CalendarSVG";
import { DatePicker } from "../../selection";

const { StyledInput } = InputDatePickerStyledComponents;

const placeholderDate = new Date();
placeholderDate.setMonth(0);
placeholderDate.setDate(1);
placeholderDate.setHours(0);
placeholderDate.setMinutes(0);

const InputDatePicker: FC<InputDatePickerProps> = ({
  value,
  onChange,
  hasTime,
  size,
  isDisabled,
  placeholder,
  dateFormat = "yyyy-MM-dd",
}) => {
  const [dateString, setDateString] = useState(
    value ? format(value, dateFormat) : ""
  );

  useEffect(() => {
    if (value) {
      setDateString(format(value, dateFormat));
    }
  }, [dateFormat, value]);

  return (
    <Dialog>
      {({ handleClose, triggerRect }) => {
        return (
          <>
            <Dialog.Trigger>
              <div>
                <StyledInput
                  value={dateString}
                  suffixNode={<CalendarSVG width={14} height={14} />}
                  hasClearButton={false}
                  size={size}
                  placeholder={placeholder}
                  isDisabled={isDisabled}
                  onBlur={() => {
                    if (onChange) {
                      const parsed = parse(dateString, dateFormat, new Date());
                      if (isValid(parsed)) {
                        onChange(parsed);
                      } else {
                        setDateString(value ? format(value, dateFormat) : "");
                      }
                    }
                  }}
                  onChange={setDateString}
                />
              </div>
            </Dialog.Trigger>
            <Dialog.Body>
              <Dialog.Body.Popup
                handleClose={handleClose}
                triggerRect={triggerRect}
                positionOption={{
                  topMargin: (triggerRect?.height || 0) + 4,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                  }}
                >
                  <DatePicker
                    value={value}
                    onChange={onChange}
                    hasTime={hasTime}
                  />
                </div>
              </Dialog.Body.Popup>
            </Dialog.Body>
          </>
        );
      }}
    </Dialog>
  );
};

InputDatePicker.displayName = "InputDatePicker";

export default InputDatePicker;
