import { FC } from "react";
import { CommonSVGProps } from "../../types";

const RssSVG: FC<CommonSVGProps> = ({
  width = 48,
  height = 48,
  fill = "#111111",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 44L8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V44L24 35.7273L8 44Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6C6 3.79086 7.79086 2 10 2H38C40.2091 2 42 3.79086 42 6V44C42 44.698 41.6361 45.3455 41.0399 45.7084C40.4437 46.0713 39.7014 46.0971 39.0814 45.7766L24 37.9788L8.91857 45.7766C8.29857 46.0971 7.55629 46.0713 6.96008 45.7084C6.36388 45.3455 6 44.698 6 44V6ZM38 6L10 6V40.7144L23.0814 33.9507C23.6576 33.6528 24.3424 33.6528 24.9186 33.9507L38 40.7144V6Z"
        fill={fill}
      />
    </svg>
  );
};
export default RssSVG;
