import { FC } from "react";
import { CommonSVGProps } from "../../types";

const FileSVG: FC<CommonSVGProps> = ({
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
        d="M6 6C6 3.79086 7.79086 2 10 2H30C31.1046 2 32 2.89543 32 4V12H40C41.1046 12 42 12.8954 42 14V42C42 44.2091 40.2091 46 38 46H10C7.79086 46 6 44.2091 6 42V6ZM28 6L10 6V42H38V16H30C28.8954 16 28 15.1046 28 14V6Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5858 2.58579C29.3668 1.80474 30.6332 1.80474 31.4142 2.58579L41.4142 12.5858C42.1953 13.3668 42.1953 14.6332 41.4142 15.4142C40.6332 16.1953 39.3668 16.1953 38.5858 15.4142L28.5858 5.41421C27.8047 4.63317 27.8047 3.36683 28.5858 2.58579Z"
        fill={fill}
      />
    </svg>
  );
};

export default FileSVG;
