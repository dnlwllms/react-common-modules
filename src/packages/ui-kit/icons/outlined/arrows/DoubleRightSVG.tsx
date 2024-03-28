import { FC } from "react";
import { CommonSVGProps } from "../../types";

const DoubleRightSVG: FC<CommonSVGProps> = ({
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
        d="M10.5858 10.5858C11.3668 9.80474 12.6332 9.80474 13.4142 10.5858L25.4142 22.5858C26.1953 23.3668 26.1953 24.6332 25.4142 25.4142L13.4142 37.4142C12.6332 38.1953 11.3668 38.1953 10.5858 37.4142C9.80474 36.6332 9.80474 35.3668 10.5858 34.5858L21.1716 24L10.5858 13.4142C9.80474 12.6332 9.80474 11.3668 10.5858 10.5858Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5858 10.5858C23.3668 9.80474 24.6332 9.80474 25.4142 10.5858L37.4142 22.5858C38.1953 23.3668 38.1953 24.6332 37.4142 25.4142L25.4142 37.4142C24.6332 38.1953 23.3668 38.1953 22.5858 37.4142C21.8047 36.6332 21.8047 35.3668 22.5858 34.5858L33.1716 24L22.5858 13.4142C21.8047 12.6332 21.8047 11.3668 22.5858 10.5858Z"
        fill={fill}
      />
    </svg>
  );
};
export default DoubleRightSVG;
