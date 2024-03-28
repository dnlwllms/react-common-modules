import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { PointPosition, SliderProps } from "./types";
import SliderStyledComponents from "./styled";

const { Container, Bar, Fill, Point, LabelContainer } = SliderStyledComponents;

const defaultMin = 0;
const defaultMax = 100;

const Slider: FC<SliderProps> = ({
  min = defaultMin,
  max = defaultMax,
  step = 1,
  names,
  value = [min, max],
  onChange,
  isDisabled,
  labels,
  hasLabel,
}) => {
  const handleMinChange = useCallback(
    (minValue: number) => {
      if (min <= minValue && minValue <= value[1]) {
        if (onChange) {
          onChange([minValue, value[1]]);
        }
      }
    },
    [min, onChange, value]
  );

  const handleMaxChange = useCallback(
    (maxValue: number) => {
      if (value[0] <= maxValue && maxValue <= max) {
        if (onChange) {
          onChange([value[0], maxValue]);
        }
      }
    },
    [max, onChange, value]
  );

  const total = useMemo(
    () => (isDisabled ? 0 : max - min),
    [max, min, isDisabled]
  );
  const minRate = useMemo(
    () => (isDisabled ? 0 : ((value[0] - min) / total) * 100),
    [min, total, value, isDisabled]
  );
  const maxRate = useMemo(
    () => (isDisabled ? 0 : ((max - value[1]) / total) * 100),
    [max, total, value, isDisabled]
  );

  const [clickedPoint, setClickedPoint] = useState<PointPosition>();
  const handlePointerDown = (point: PointPosition) => {
    setClickedPoint(point);
  };
  const handlePointerUp = () => {
    setClickedPoint(undefined);
  };
  const barRef = useRef<HTMLDivElement>(null);

  const handleValue = useCallback(
    (e: MouseEvent) => {
      const barEl = barRef.current;
      if (barEl && e.movementX !== 0) {
        const { width, left } = barEl.getBoundingClientRect();
        const movementRate = Number(((e.clientX - left) / width).toFixed(4));
        const isPlus = e.movementX > 0;
        const expect = Math.round(min + total * movementRate);
        const extra = (expect - min) % step;

        if ((isPlus && extra >= step / 2) || (!isPlus && extra <= step / 2)) {
          let changedValue;
          if (isPlus) {
            changedValue = expect - extra + step;
          } else {
            changedValue = expect - extra;
          }

          if (clickedPoint === "left" && changedValue !== value[0]) {
            handleMinChange(changedValue);
          } else if (clickedPoint === "right" && changedValue !== value[1]) {
            handleMaxChange(changedValue);
          }
        }
      }
    },
    [clickedPoint, handleMaxChange, handleMinChange, min, step, total, value]
  );

  useEffect(() => {
    if (!isDisabled) {
      if (clickedPoint) {
        window.addEventListener("mousemove", handleValue);
        window.addEventListener("pointermove", handleValue);
      }

      return () => {
        window.removeEventListener("mousemove", handleValue);
        window.removeEventListener("pointermove", handleValue);
      };
    }
  }, [clickedPoint, handleValue, isDisabled]);

  useEffect(() => {
    if (!isDisabled) {
      window.addEventListener("mouseup", handlePointerUp);
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("touchend", handlePointerUp);
      return () => {
        window.removeEventListener("mouseup", handlePointerUp);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("touchend", handlePointerUp);
      };
    }
  }, [isDisabled]);

  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!isDisabled) {
      if (min > max) {
        setError("max값이 min값 보다 작아야 합니다.");
      } else if (max - min < step) {
        setError("step 값이 초과 되었습니다.");
      } else {
        setError(undefined);
      }
    }
  }, [isDisabled, max, min, step]);

  return (
    <Container>
      {error || (
        <>
          <input
            type="range"
            name={names?.[0]}
            value={value[0]}
            min={min}
            max={max}
            step={step}
            onChange={({ target: { value } }) => handleMinChange(Number(value))}
            hidden
          />
          <input
            type="range"
            name={names?.[1]}
            value={value[1]}
            min={min}
            max={max}
            step={step}
            onChange={({ target: { value } }) => handleMaxChange(Number(value))}
            hidden
          />
          <Bar ref={barRef}>
            {!isDisabled && (
              <Fill style={{ left: `${minRate}%`, right: `${maxRate}%` }}>
                <Point
                  style={{ left: -8 }}
                  onMouseDown={() => handlePointerDown("left")}
                  onPointerDown={() => handlePointerDown("left")}
                  onTouchStart={() => handlePointerDown("left")}
                />
                <Point
                  style={{ right: -8 }}
                  onMouseDown={() => handlePointerDown("right")}
                  onPointerDown={() => handlePointerDown("right")}
                  onTouchStart={() => handlePointerDown("right")}
                />
              </Fill>
            )}
          </Bar>
          {hasLabel && (
            <LabelContainer theme={{ isDisabled }}>
              <span>{labels ? labels[0] : min.toLocaleString()}</span>
              <span>{labels ? labels[1] : max.toLocaleString()}</span>
            </LabelContainer>
          )}
        </>
      )}
    </Container>
  );
};

Slider.displayName = "Slider";

export default Slider;
