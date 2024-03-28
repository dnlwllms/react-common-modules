import { FC } from "react";
import { CommonSVGProps } from "../../types";

const HamburgerButtonSVG: FC<CommonSVGProps> = ({
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
        d="M5.94971 11.9497C5.94971 10.8451 6.84514 9.94971 7.94971 9.94971H39.9497C41.0543 9.94971 41.9497 10.8451 41.9497 11.9497C41.9497 13.0543 41.0543 13.9497 39.9497 13.9497H7.94971C6.84514 13.9497 5.94971 13.0543 5.94971 11.9497Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.94971 23.9497C5.94971 22.8451 6.84514 21.9497 7.94971 21.9497H39.9497C41.0543 21.9497 41.9497 22.8451 41.9497 23.9497C41.9497 25.0543 41.0543 25.9497 39.9497 25.9497H7.94971C6.84514 25.9497 5.94971 25.0543 5.94971 23.9497Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.94971 35.9497C5.94971 34.8451 6.84514 33.9497 7.94971 33.9497H39.9497C41.0543 33.9497 41.9497 34.8451 41.9497 35.9497C41.9497 37.0543 41.0543 37.9497 39.9497 37.9497H7.94971C6.84514 37.9497 5.94971 37.0543 5.94971 35.9497Z"
        fill={fill}
      />
    </svg>
  );
};
export default HamburgerButtonSVG;
