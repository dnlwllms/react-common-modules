import { FC } from "react";
import { CommonSVGProps } from "../../types";

const DownloadSVG: FC<CommonSVGProps> = ({
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
        d="M4 42C4 40.8954 4.89543 40 6 40H42C43.1046 40 44 40.8954 44 42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5858 21.5858C14.3668 20.8047 15.6332 20.8047 16.4142 21.5858L24 29.1716L31.5858 21.5858C32.3668 20.8047 33.6332 20.8047 34.4142 21.5858C35.1953 22.3668 35.1953 23.6332 34.4142 24.4142L25.4142 33.4142C24.6332 34.1953 23.3668 34.1953 22.5858 33.4142L13.5858 24.4142C12.8047 23.6332 12.8047 22.3668 13.5858 21.5858Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9917 4C25.0963 4 25.9917 4.89543 25.9917 6V32C25.9917 33.1046 25.0963 34 23.9917 34C22.8871 34 21.9917 33.1046 21.9917 32V6C21.9917 4.89543 22.8871 4 23.9917 4Z"
        fill={fill}
      />
    </svg>
  );
};
export default DownloadSVG;
