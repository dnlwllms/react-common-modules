import { FC } from "react";
import { CommonSVGProps } from "../../types";

const SystemSVG: FC<CommonSVGProps> = ({
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
        d="M4 8C4 5.79086 5.79086 4 8 4H18C20.2091 4 22 5.79086 22 8V18C22 20.2091 20.2091 22 18 22H8C5.79086 22 4 20.2091 4 18V8ZM18 8H8V18H18V8Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 30C4 27.7909 5.79086 26 8 26H18C20.2091 26 22 27.7909 22 30V40C22 42.2091 20.2091 44 18 44H8C5.79086 44 4 42.2091 4 40V30ZM18 30H8V40H18V30Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 13C26 8.02944 30.0294 4 35 4C39.9706 4 44 8.02944 44 13C44 17.9706 39.9706 22 35 22C30.0294 22 26 17.9706 26 13ZM35 8C32.2386 8 30 10.2386 30 13C30 15.7614 32.2386 18 35 18C37.7614 18 40 15.7614 40 13C40 10.2386 37.7614 8 35 8Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 30C26 27.7909 27.7909 26 30 26H40C42.2091 26 44 27.7909 44 30V40C44 42.2091 42.2091 44 40 44H30C27.7909 44 26 42.2091 26 40V30ZM40 30H30V40H40V30Z"
        fill={fill}
      />
    </svg>
  );
};

export default SystemSVG;
