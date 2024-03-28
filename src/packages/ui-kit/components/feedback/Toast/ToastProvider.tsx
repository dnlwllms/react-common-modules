import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ToastContext from "./context";

import { ToastProps, ToastProviderProps } from "./types";
import ToastStyledComponents from "./styled";

import Toast from "./Toast";

const { PortalContainer } = ToastStyledComponents;

const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (containerRef.current && toasts.length > 0) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [toasts.length]);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setToasts([]);
    }, 5000);

    if (isReady && containerRef.current) {
      const container = containerRef.current;
      const lastChild = container.lastChild as HTMLDivElement;

      lastChild.style.opacity = "0";
      lastChild.style.animation = "toast 5s";
      lastChild.onanimationend = () => {
        lastChild.style.display = "none";
      };
    }
  }, [isReady, toasts.length]);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
      }}
    >
      {children}
      {toasts.length > 0 &&
        createPortal(<PortalContainer ref={containerRef} />, document.body)}
      {isReady &&
        toasts.map((toast, index) => {
          return createPortal(
            <Toast key={index} {...toast} />,
            containerRef.current as HTMLDivElement
          );
        })}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
