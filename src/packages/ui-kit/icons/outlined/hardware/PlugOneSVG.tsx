import { FC } from "react";
import { CommonSVGProps } from "../../types";

const PlugOneSVG: FC<CommonSVGProps> = ({
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
        d="M10 15C10 12.2386 12.2386 10 15 10H33C35.7614 10 38 12.2386 38 15V33C38 35.7614 35.7614 38 33 38H15C12.2386 38 10 35.7614 10 33V15ZM15 14C14.4477 14 14 14.4477 14 15V33C14 33.5523 14.4477 34 15 34H33C33.5523 34 34 33.5523 34 33V15C34 14.4477 33.5523 14 33 14H15Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 34C22.8954 34 22 34.8954 22 36V41C22 41.5523 21.5523 42 21 42H8C6.89543 42 6 42.8954 6 44C6 45.1046 6.89543 46 8 46H21C23.7614 46 26 43.7614 26 41V36C26 34.8954 25.1046 34 24 34Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 14C18.8954 14 18 13.1046 18 12V4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4V12C22 13.1046 21.1046 14 20 14Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 14C26.8954 14 26 13.1046 26 12V4C26 2.89543 26.8954 2 28 2C29.1046 2 30 2.89543 30 4V12C30 13.1046 29.1046 14 28 14Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 24C20 22.8954 20.8954 22 22 22H26C27.1046 22 28 22.8954 28 24C28 25.1046 27.1046 26 26 26H22C20.8954 26 20 25.1046 20 24Z"
        fill={fill}
      />
    </svg>
  );
};

export default PlugOneSVG;
