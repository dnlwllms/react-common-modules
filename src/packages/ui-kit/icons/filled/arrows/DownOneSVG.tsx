import { FC } from "react";
import { CommonSVGProps } from "../../types";

const DownOneSVG: FC<CommonSVGProps> = ({
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
      <path d="M36 19L24 31L12 19H36Z" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1523 18.2346C10.4619 17.4873 11.1911 17 12.0001 17H36.0001C36.809 17 37.5383 17.4873 37.8478 18.2346C38.1574 18.982 37.9863 19.8422 37.4143 20.4142L25.4143 32.4142C24.6332 33.1953 23.3669 33.1953 22.5858 32.4142L10.5858 20.4142C10.0138 19.8422 9.84274 18.982 10.1523 18.2346ZM16.8285 21L24.0001 28.1716L31.1716 21H16.8285Z"
        fill={fill}
      />
    </svg>
  );
};
export default DownOneSVG;
