import { format } from "date-fns";

import { FC, useState } from "react";

import { InputTimePickerProps } from "./types";
import InputDatePickerStyledComponents from "./styled";

import { Dialog } from "../../../core";

import { TimePicker } from "../../selection";

import { TimeSVG } from "../../../icons/outlined/time";

const { Container, InputArea } = InputDatePickerStyledComponents;

const placeholderDate = new Date();
placeholderDate.setMonth(0);
placeholderDate.setDate(1);
placeholderDate.setHours(0);
placeholderDate.setMinutes(0);

const getFormatDateByHasTime = (date: Date) => {
  return format(date, "HH:mm");
};

const InputTimePicker: FC<InputTimePickerProps> = ({
  value,
  onChange,
  hasTime,
  size,
  isDisabled,
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container
      {...props}
      theme={{
        size,
        isDisabled,
        isSelected,
      }}
      onClick={() => {
        setIsSelected(false);
      }}
    >
      <Dialog>
        {({ handleClose, triggerRect, isOpen }) => {
          return (
            <>
              <Dialog.Trigger>
                <InputArea theme={{ isOpen, isDisabled }}>
                  <input
                    value={value ? getFormatDateByHasTime(value) : ""}
                    disabled={isDisabled}
                    placeholder={getFormatDateByHasTime(placeholderDate)}
                    readOnly
                  />
                </InputArea>
              </Dialog.Trigger>
              {!isDisabled && (
                <Dialog.Body>
                  <Dialog.Body.Popup
                    handleClose={handleClose}
                    triggerRect={triggerRect}
                    positionOption={{
                      topMargin: (triggerRect?.height || 0) + 12,
                      leftMargin: -16,
                    }}
                  >
                    <div style={{ position: "absolute" }}>
                      <TimePicker
                        style={{
                          height: 306,
                        }}
                        date={value}
                        onDateChange={onChange}
                        onOkClick={handleClose}
                      />
                    </div>
                  </Dialog.Body.Popup>
                </Dialog.Body>
              )}
            </>
          );
        }}
      </Dialog>
      <TimeSVG width={14} height={14} />
    </Container>
  );
};

InputTimePicker.displayName = "InputTimePicker";

export default InputTimePicker;
