import { forwardRef, useMemo, useRef, useState } from "react";

import { InputProps } from "./types";
import InputStyledComponents from "./styled";

import CloseOneSVG from "../../../icons/filled/character/CloseOneSVG";
import AttentionSVG from "../../../icons/filled/character/AttentionSVG";

const { Container, InputContainer, IconContainer, CloseContainer } =
  InputStyledComponents;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      shape = "box",
      size = "medium",
      isCapsule,
      isDisabled,
      hasClearButton = true,
      suffixNode,
      isError,
      icon,
      value,
      style,
      className,
      onBlur,
      onFocus,
      onChange,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocused(false);

      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (value: string) => {
      if (onChange) {
        onChange(value);
      }
    };

    const handleClearClick = () => {
      if (onChange) {
        onChange("");
      }

      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.querySelector("input")?.focus();
        }
      });
    };

    const isTyping = useMemo(() => {
      return !!value && isFocused;
    }, [value, isFocused]);

    const isCompleted = useMemo(() => {
      return !!value && !isFocused;
    }, [value, isFocused]);

    return (
      <Container ref={containerRef} className={className} style={style}>
        <InputContainer
          theme={{
            shape,
            size,
            isCapsule,
            isFocused,
            isTyping,
            isCompleted,
            isDisabled,
            isError,
          }}
        >
          {icon && (
            <IconContainer
              theme={{
                size,
                isFocused,
                isCompleted,
                isDisabled,
              }}
            >
              {icon}
            </IconContainer>
          )}
          <input
            ref={ref}
            value={value || ""}
            disabled={isDisabled}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={({ target: { value } }) => {
              handleChange(value);
            }}
            {...props}
          />
          {!isError && isTyping && !props.readOnly && hasClearButton && (
            <CloseContainer onMouseDown={handleClearClick}>
              <CloseOneSVG
                width={14}
                height={14}
                fill={["#eeeeee", "#ffffff"]}
              />
            </CloseContainer>
          )}
          {!!isError && (
            <AttentionSVG
              width={14}
              height={14}
              fill={["#FF5147", "#ffffff"]}
            />
          )}
          {suffixNode && suffixNode}
        </InputContainer>
      </Container>
    );
  }
);

Input.displayName = "Input";

export default Input;
