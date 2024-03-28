import { FC } from "react";
import { CommonSVGProps } from "../../types";

const RemindSVG: FC<CommonSVGProps> = ({
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
        d="M24 6C17.3726 6 12 11.3726 12 18V36H36V18C36 11.3726 30.6274 6 24 6ZM40 36V18C40 9.16344 32.8366 2 24 2C15.1634 2 8 9.16344 8 18V36H4C2.89543 36 2 36.8954 2 38C2 39.1046 2.89543 40 4 40H44C45.1046 40 46 39.1046 46 38C46 36.8954 45.1046 36 44 36H40Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 38C17 36.8954 17.8954 36 19 36H29C30.1046 36 31 36.8954 31 38V39C31 42.866 27.866 46 24 46C20.134 46 17 42.866 17 39V38ZM21.1707 40C21.5825 41.1652 22.6938 42 24 42C25.3062 42 26.4175 41.1652 26.8293 40H21.1707Z"
        fill={fill}
      />
    </svg>
  );
};
export default RemindSVG;
