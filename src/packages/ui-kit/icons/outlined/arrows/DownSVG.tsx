import { FC } from "react";
import { CommonSVGProps } from "../../types";

const DownSVG: FC<CommonSVGProps> = ({
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
        d="M11.5858 16.5858C12.3668 15.8047 13.6332 15.8047 14.4142 16.5858L25 27.1716L35.5858 16.5858C36.3668 15.8047 37.6332 15.8047 38.4142 16.5858C39.1953 17.3668 39.1953 18.6332 38.4142 19.4142L26.4142 31.4142C25.6332 32.1953 24.3668 32.1953 23.5858 31.4142L11.5858 19.4142C10.8047 18.6332 10.8047 17.3668 11.5858 16.5858Z"
        fill={fill}
      />
    </svg>
  );
};
export default DownSVG;
