import { FC } from "react";
import { CommonSVGProps } from "../../types";

const FolderCloseSVG: FC<CommonSVGProps> = ({
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
        d="M2 9C2 6.79086 3.79086 5 6 5H19C19.5936 5 20.1565 5.26365 20.5364 5.71963L24.9367 11H42C44.2091 11 46 12.7909 46 15V39C46 41.2091 44.2091 43 42 43H6C3.79086 43 2 41.2091 2 39V9ZM18.0632 9H6V39H42V15H24C23.4064 15 22.8435 14.7364 22.4636 14.2804L18.0632 9Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 20H44V24H4V20Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14C5.10457 14 6 14.8954 6 16V28C6 29.1046 5.10457 30 4 30C2.89543 30 2 29.1046 2 28V16C2 14.8954 2.89543 14 4 14Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 14C45.1046 14 46 14.8954 46 16V28C46 29.1046 45.1046 30 44 30C42.8954 30 42 29.1046 42 28V16C42 14.8954 42.8954 14 44 14Z"
        fill={fill}
      />
    </svg>
  );
};

export default FolderCloseSVG;
