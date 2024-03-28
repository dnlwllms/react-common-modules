import { FC } from "react";
import { CommonSVGProps } from "../../types";

const ChipSVG: FC<CommonSVGProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8C10 5.79086 11.7909 4 14 4H34C36.2091 4 38 5.79086 38 8V40C38 42.2091 36.2091 44 34 44H14C11.7909 44 10 42.2091 10 40V8ZM34 8L14 8V40H34V8Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12C14 13.1046 13.1046 14 12 14L6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10H12C13.1046 10 14 10.8954 14 12Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 20C14 21.1046 13.1046 22 12 22H6C4.89543 22 4 21.1046 4 20C4 18.8954 4.89543 18 6 18H12C13.1046 18 14 18.8954 14 20Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 28C14 29.1046 13.1046 30 12 30H6C4.89543 30 4 29.1046 4 28C4 26.8954 4.89543 26 6 26H12C13.1046 26 14 26.8954 14 28Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 36C14 37.1046 13.1046 38 12 38H6C4.89543 38 4 37.1046 4 36C4 34.8954 4.89543 34 6 34H12C13.1046 34 14 34.8954 14 36Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 12C44 13.1046 43.1046 14 42 14L36 14C34.8954 14 34 13.1046 34 12C34 10.8954 34.8954 10 36 10H42C43.1046 10 44 10.8954 44 12Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 20C44 21.1046 43.1046 22 42 22H36C34.8954 22 34 21.1046 34 20C34 18.8954 34.8954 18 36 18H42C43.1046 18 44 18.8954 44 20Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 28C44 29.1046 43.1046 30 42 30H36C34.8954 30 34 29.1046 34 28C34 26.8954 34.8954 26 36 26H42C43.1046 26 44 26.8954 44 28Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 36C44 37.1046 43.1046 38 42 38H36C34.8954 38 34 37.1046 34 36C34 34.8954 34.8954 34 36 34H42C43.1046 34 44 34.8954 44 36Z"
        fill={fill}
      />
    </svg>
  );
};
export default ChipSVG;
