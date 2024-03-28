import { FC } from "react";
import { CommonSVGProps } from "../../types";

const DoubleLeftSVG: FC<CommonSVGProps> = ({
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
        d="M25.4142 10.5858C26.1953 11.3668 26.1953 12.6332 25.4142 13.4142L14.8284 24L25.4142 34.5858C26.1953 35.3668 26.1953 36.6332 25.4142 37.4142C24.6332 38.1953 23.3668 38.1953 22.5858 37.4142L10.5858 25.4142C9.80474 24.6332 9.80474 23.3668 10.5858 22.5858L22.5858 10.5858C23.3668 9.80474 24.6332 9.80474 25.4142 10.5858Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.4142 10.5858C38.1953 11.3668 38.1953 12.6332 37.4142 13.4142L26.8284 24L37.4142 34.5858C38.1953 35.3668 38.1953 36.6332 37.4142 37.4142C36.6332 38.1953 35.3668 38.1953 34.5858 37.4142L22.5858 25.4142C21.8047 24.6332 21.8047 23.3668 22.5858 22.5858L34.5858 10.5858C35.3668 9.80474 36.6332 9.80474 37.4142 10.5858Z"
        fill={fill}
      />
    </svg>
  );
};
export default DoubleLeftSVG;
