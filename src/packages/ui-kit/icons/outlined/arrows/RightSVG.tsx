import { FC } from "react";
import { CommonSVGProps } from "../../types";

const RightSVG: FC<CommonSVGProps> = ({
  width = 48,
  height = 48,
  fill = "#111111",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5858 10.5858C18.3668 9.80474 19.6332 9.80474 20.4142 10.5858L32.4142 22.5858C33.1953 23.3668 33.1953 24.6332 32.4142 25.4142L20.4142 37.4142C19.6332 38.1953 18.3668 38.1953 17.5858 37.4142C16.8047 36.6332 16.8047 35.3668 17.5858 34.5858L28.1716 24L17.5858 13.4142C16.8047 12.6332 16.8047 11.3668 17.5858 10.5858Z"
        fill={fill}
      />
    </svg>
  );
};
export default RightSVG;
