import { ChangeEvent, forwardRef, useEffect, useState } from "react";

import { TextareaProps } from "./types";
import TextareaStyledComponents from "./styled";

const { Container, StyledTextarea, InfoArea, LengthArea } =
  TextareaStyledComponents;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, maxLength = 500, isError, isDisabled, ...props }, ref) => {
    const [value, setValue] = useState(props.value || "");

    useEffect(() => {
      if (props.value) {
        setValue(props.value);
      }
    }, [props.value]);

    const [isFocus, setIsFocus] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (props.onChange) {
        props.onChange(e.target.value);
      }

      setValue(e.target.value);
    };

    const handleFocus = () => {
      setIsFocus(true);
    };

    const handleBlur = () => {
      setIsFocus(false);
    };

    return (
      <Container
        className={className}
        theme={{
          isError,
          isFocus,
          isDisabled,
        }}
      >
        <StyledTextarea
          {...props}
          ref={ref}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={maxLength}
          disabled={isDisabled}
        />
        <InfoArea>
          <LengthArea theme={{ isDisabled }}>
            <span>{value.toString().length}</span>
            <span>/{maxLength}</span>
          </LengthArea>
        </InfoArea>
      </Container>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
