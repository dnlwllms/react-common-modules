import { format } from "date-fns";

import { FC, useState } from "react";

import { InputTimePickerProps } from "./types";
import InputDatePickerStyledComponents from "./styled";

import { TimeSVG } from "../../../../icons/outlined/time";

import { Dialog } from "../../../../core";

import TimePicker from "../../TimePicker";

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

  if (hasRange) {
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
                      value={range?.[0] ? getFormatDateByHasTime(range[0]) : ""}
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
                        topMargin: (triggerRect?.height || 0) + 8,
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <TimePicker
                          style={{
                            height: 306,
                          }}
                          date={date}
                          onDateChange={(date) => {
                            if (range && onRangeChange) {
                              onRangeChange([date, range[1]]);
                            }
                          }}
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
        <span>~</span>
        <Dialog>
          {({ handleClose, triggerRect, isOpen }) => {
            return (
              <>
                <Dialog.Trigger>
                  <InputArea theme={{ isOpen, isDisabled }}>
                    <input
                      value={range?.[1] ? getFormatDateByHasTime(range[1]) : ""}
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
                        topMargin: (triggerRect?.height || 0) + 8,
                      }}
                    >
                      <div style={{ position: "absolute" }}>
                        <TimePicker
                          style={{
                            height: 306,
                          }}
                          date={date}
                          onDateChange={(date) => {
                            if (range && onRangeChange) {
                              onRangeChange([range[0], date]);
                            }
                          }}
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
  }

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
                    value={date ? getFormatDateByHasTime(date) : ""}
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
                      topMargin: (triggerRect?.height || 0) + 8,
                    }}
                  >
                    <div style={{ position: "absolute" }}>
                      <TimePicker
                        style={{
                          height: 306,
                        }}
                        date={date}
                        onDateChange={onDateChange}
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
