import { FC } from "react";
import { CommonSVGProps } from "../../types";

const MemoryOneSVG: FC<CommonSVGProps> = ({
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
        d="M3 28C3 26.8954 3.89543 26 5 26H43C44.1046 26 45 26.8954 45 28V42C45 43.1046 44.1046 44 43 44H5C3.89543 44 3 43.1046 3 42V28ZM7 30V40H41V30H7Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3 4.89543 3.89543 4 5 4H43C44.1046 4 45 4.89543 45 6V20C45 21.1046 44.1046 22 43 22H5C3.89543 22 3 21.1046 3 20V6ZM7 8V18H41V8H7Z"
        fill={fill}
      />
      <path
        d="M11 13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13C15 14.1046 14.1046 15 13 15C11.8954 15 11 14.1046 11 13Z"
        fill={fill}
      />
      <path
        d="M11 35C11 33.8954 11.8954 33 13 33C14.1046 33 15 33.8954 15 35C15 36.1046 14.1046 37 13 37C11.8954 37 11 36.1046 11 35Z"
        fill={fill}
      />
      <path
        d="M19 13C19 11.8954 19.8954 11 21 11C22.1046 11 23 11.8954 23 13C23 14.1046 22.1046 15 21 15C19.8954 15 19 14.1046 19 13Z"
        fill={fill}
      />
      <path
        d="M19 35C19 33.8954 19.8954 33 21 33C22.1046 33 23 33.8954 23 35C23 36.1046 22.1046 37 21 37C19.8954 37 19 36.1046 19 35Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 13C29 11.8954 29.8954 11 31 11H35C36.1046 11 37 11.8954 37 13C37 14.1046 36.1046 15 35 15H31C29.8954 15 29 14.1046 29 13Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 35C29 33.8954 29.8954 33 31 33H35C36.1046 33 37 33.8954 37 35C37 36.1046 36.1046 37 35 37H31C29.8954 37 29 36.1046 29 35Z"
        fill={fill}
      />
    </svg>
  );
};
export default MemoryOneSVG;
