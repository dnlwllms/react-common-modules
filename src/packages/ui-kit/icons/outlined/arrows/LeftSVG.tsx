import { FC } from "react";
import { CommonSVGProps } from "../../types";

const LeftSVG: FC<CommonSVGProps> = ({
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
        d="M32.4142 10.5858C33.1953 11.3668 33.1953 12.6332 32.4142 13.4142L21.8284 24L32.4142 34.5858C33.1953 35.3668 33.1953 36.6332 32.4142 37.4142C31.6332 38.1953 30.3668 38.1953 29.5858 37.4142L17.5858 25.4142C16.8047 24.6332 16.8047 23.3668 17.5858 22.5858L29.5858 10.5858C30.3668 9.80474 31.6332 9.80474 32.4142 10.5858Z"
        fill={fill}
      />
    </svg>
  );
};
export default LeftSVG;
