import { FC } from "react";
import { CommonSVGProps } from "../../types";

const MoreOneSVG: FC<CommonSVGProps> = ({
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
        d="M27 12C27 13.6569 25.6569 15 24 15C22.3431 15 21 13.6569 21 12C21 10.3431 22.3431 9 24 9C25.6569 9 27 10.3431 27 12Z"
        fill={fill}
      />
      <path
        d="M27 24C27 25.6569 25.6569 27 24 27C22.3431 27 21 25.6569 21 24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24Z"
        fill={fill}
      />
      <path
        d="M27 35C27 36.6569 25.6569 38 24 38C22.3431 38 21 36.6569 21 35C21 33.3431 22.3431 32 24 32C25.6569 32 27 33.3431 27 35Z"
        fill={fill}
      />
    </svg>
  );
};
export default MoreOneSVG;
