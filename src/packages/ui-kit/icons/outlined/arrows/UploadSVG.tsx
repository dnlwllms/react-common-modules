import { FC } from "react";
import { CommonSVGProps } from "../../types";

const UploadSVG: FC<CommonSVGProps> = ({
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
      <g clipPath="url(#clip0_6203_4465)">
        <mask
          id="mask0_6203_4465"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="48"
          height="48"
        >
          <path d="M48 0H0V48H48V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_6203_4465)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42 22C43.1046 22 44 22.8954 44 24V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V24.0083C4 22.9037 4.89543 22.0083 6 22.0083C7.10457 22.0083 8 22.9037 8 24.0083V40H40V24C40 22.8954 40.8954 22 42 22Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.5858 4.58579C23.3668 3.80474 24.6332 3.80474 25.4142 4.58579L34.4142 13.5858C35.1953 14.3668 35.1953 15.6332 34.4142 16.4142C33.6332 17.1953 32.3668 17.1953 31.5858 16.4142L24 8.82843L16.4142 16.4142C15.6332 17.1953 14.3668 17.1953 13.5858 16.4142C12.8047 15.6332 12.8047 14.3668 13.5858 13.5858L22.5858 4.58579Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.9917 4C25.0963 4 25.9917 4.89543 25.9917 6V32C25.9917 33.1046 25.0963 34 23.9917 34C22.8871 34 21.9917 33.1046 21.9917 32V6C21.9917 4.89543 22.8871 4 23.9917 4Z"
            fill={fill}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_6203_4465">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default UploadSVG;
