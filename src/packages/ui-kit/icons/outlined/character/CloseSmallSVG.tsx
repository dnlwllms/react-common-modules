import { FC } from "react";
import { CommonSVGProps } from "../../types";

const CloseSmallSVG: FC<CommonSVGProps> = ({
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
        d="M12.5858 12.5858C13.3668 11.8047 14.6332 11.8047 15.4142 12.5858L35.4142 32.5858C36.1953 33.3668 36.1953 34.6332 35.4142 35.4142C34.6332 36.1953 33.3668 36.1953 32.5858 35.4142L12.5858 15.4142C11.8047 14.6332 11.8047 13.3668 12.5858 12.5858Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.4142 12.5858C36.1953 13.3668 36.1953 14.6332 35.4142 15.4142L15.4142 35.4142C14.6332 36.1953 13.3668 36.1953 12.5858 35.4142C11.8047 34.6332 11.8047 33.3668 12.5858 32.5858L32.5858 12.5858C33.3668 11.8047 34.6332 11.8047 35.4142 12.5858Z"
        fill={fill}
      />
    </svg>
  );
};
export default CloseSmallSVG;
