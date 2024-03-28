import { FC } from "react";
import { CommonSVGProps } from "../../types";

const CenterAlignmentSVG: FC<CommonSVGProps> = ({
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
        d="M4 14C4 12.8954 4.89543 12 6 12L42 12C43.1046 12 44 12.8954 44 14C44 15.1046 43.1046 16 42 16L6 16C4.89543 16 4 15.1046 4 14Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 24C10 22.8954 10.8954 22 12 22L36 22C37.1046 22 38 22.8954 38 24C38 25.1046 37.1046 26 36 26L12 26C10.8954 26 10 25.1046 10 24Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 34C18 32.8954 18.8954 32 20 32L28 32C29.1046 32 30 32.8954 30 34C30 35.1046 29.1046 36 28 36H20C18.8954 36 18 35.1046 18 34Z"
        fill={fill}
      />
    </svg>
  );
};
export default CenterAlignmentSVG;
