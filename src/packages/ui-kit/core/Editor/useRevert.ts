import _ from "lodash";
import { useCallback, useState } from "react";

export default function useRevert<T>(value: T, onChange: (value: T) => void) {
  const [history, setHistory] = useState<T[]>([_.cloneDeep(value)]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const add = useCallback(
    (value: any) => {
      setHistory((prev) => {
        const prevHistory = prev.concat();
        const history = prevHistory.slice(0, currentIndex + 1).concat([value]);
        setCurrentIndex(history.length - 1);
        return history;
      });

      onChange(value);
    },
    [currentIndex, onChange]
  );

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => {
        const current = prev - 1;
        onChange(history[current]);
        return current;
      });
    }
  }, [currentIndex, history, onChange]);

  const handleNext = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prev) => {
        const current = prev + 1;
        onChange(history[current]);
        return current;
      });
    }
  }, [currentIndex, history, onChange]);

  return {
    current: history[currentIndex],
    handlePrev,
    handleNext,
    add,
  };
}
