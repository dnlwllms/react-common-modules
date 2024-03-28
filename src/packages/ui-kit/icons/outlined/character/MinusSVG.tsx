import { FC } from "react";
import { CommonSVGProps } from "../../types";

const MinusSVG: FC<CommonSVGProps> = ({
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
        d="M8.5 24C8.5 22.8954 9.39543 22 10.5 22L38.5 22C39.6046 22 40.5 22.8954 40.5 24C40.5 25.1046 39.6046 26 38.5 26L10.5 26C9.39543 26 8.5 25.1046 8.5 24Z"
        fill={fill}
      />
    </svg>
  );
};

export default MinusSVG;
