import { FC } from "react";
import { CommonSVGProps } from "../../types";

const AddSVG: FC<CommonSVGProps> = ({
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
        d="M4 9C4 6.23857 6.23858 4 9 4H39C41.7614 4 44 6.23858 44 9V39C44 41.7614 41.7614 44 39 44H9C6.23857 44 4 41.7614 4 39V9ZM9 8C8.44771 8 8 8.44771 8 9V39C8 39.5523 8.44771 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8H9Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 13.9998C25.1046 13.9998 26 14.8952 26 15.9998L26 31.9998C26 33.1044 25.1046 33.9998 24 33.9998C22.8954 33.9998 22 33.1044 22 31.9998L22 15.9998C22 14.8952 22.8954 13.9998 24 13.9998Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 24.0002C14 22.8956 14.8954 22.0002 16 22.0002H32C33.1046 22.0002 34 22.8956 34 24.0002C34 25.1048 33.1046 26.0002 32 26.0002H16C14.8954 26.0002 14 25.1048 14 24.0002Z"
        fill={fill}
      />
    </svg>
  );
};

export default AddSVG;
