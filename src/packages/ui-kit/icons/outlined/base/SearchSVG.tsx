import { FC } from "react";
import { CommonSVGProps } from "../../types";

const SearchSVG: FC<CommonSVGProps> = ({
  width = 48,
  height = 48,
  fill = "#111111",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 23C8 14.7157 14.7157 8 23 8C31.2843 8 38 14.7157 38 23C38 31.2843 31.2843 38 23 38C14.7157 38 8 31.2843 8 23ZM23 12C16.9249 12 12 16.9249 12 23C12 29.0751 16.9249 34 23 34C29.0751 34 34 29.0751 34 23C34 16.9249 29.0751 12 23 12Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.0005 30.1714L39.4147 36.5856C40.1958 37.3666 40.1958 38.633 39.4147 39.414C38.6337 40.1951 37.3673 40.1951 36.5863 39.414L30.1721 32.9998L33.0005 30.1714Z"
        fill={fill}
      />
    </svg>
  );
};
export default SearchSVG;
