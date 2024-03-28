import _ from "lodash";
import { useContext } from "react";

import ToastContext from "./context";

import { ToastProps } from "./types";

const useToast = () => {
  const { toasts, setToasts } = useContext(ToastContext);

  const addToast = (toastConfig: ToastProps) => {
    const clone = _.cloneDeep(toasts);

    clone.push(toastConfig);

    setToasts(clone);
  };

  return {
    addToast,
  };
};

export default useToast;
