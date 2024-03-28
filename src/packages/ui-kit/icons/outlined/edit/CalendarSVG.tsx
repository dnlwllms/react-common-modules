import { FC } from "react";
import { CommonSVGProps } from "../../types";

const CalendarSVG: FC<CommonSVGProps> = ({
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
        d="M3 19C3 17.8954 3.89543 17 5 17H43C44.1046 17 45 17.8954 45 19V40C45 42.2091 43.2091 44 41 44H7C4.79086 44 3 42.2091 3 40V19ZM7 21V40H41V21H7Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9C3 6.79086 4.79086 5 7 5H41C43.2091 5 45 6.79086 45 9V19C45 20.1046 44.1046 21 43 21H5C3.89543 21 3 20.1046 3 19V9ZM41 9H7V17H41V9Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C17.1046 2 18 2.89543 18 4V12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12V4C14 2.89543 14.8954 2 16 2Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 2C33.1046 2 34 2.89543 34 4V12C34 13.1046 33.1046 14 32 14C30.8954 14 30 13.1046 30 12V4C30 2.89543 30.8954 2 32 2Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 34C26 32.8954 26.8954 32 28 32H34C35.1046 32 36 32.8954 36 34C36 35.1046 35.1046 36 34 36H28C26.8954 36 26 35.1046 26 34Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 34C12 32.8954 12.8954 32 14 32H20C21.1046 32 22 32.8954 22 34C22 35.1046 21.1046 36 20 36H14C12.8954 36 12 35.1046 12 34Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 26C26 24.8954 26.8954 24 28 24H34C35.1046 24 36 24.8954 36 26C36 27.1046 35.1046 28 34 28H28C26.8954 28 26 27.1046 26 26Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 26C12 24.8954 12.8954 24 14 24H20C21.1046 24 22 24.8954 22 26C22 27.1046 21.1046 28 20 28H14C12.8954 28 12 27.1046 12 26Z"
        fill={fill}
      />
    </svg>
  );
};
export default CalendarSVG;
