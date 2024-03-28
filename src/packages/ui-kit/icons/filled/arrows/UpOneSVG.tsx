import { FC } from "react";
import { CommonSVGProps } from "../../types";

const UpOneSVG: FC<CommonSVGProps> = ({
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
      <path d="M12 29L24 17L36 29H12Z" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5858 15.5858C23.3669 14.8047 24.6332 14.8047 25.4143 15.5858L37.4143 27.5858C37.9863 28.1578 38.1574 29.018 37.8478 29.7654C37.5383 30.5127 36.809 31 36.0001 31H12.0001C11.1911 31 10.4619 30.5127 10.1523 29.7654C9.84274 29.018 10.0138 28.1578 10.5858 27.5858L22.5858 15.5858ZM16.8285 27H31.1716L24.0001 19.8284L16.8285 27Z"
        fill={fill}
      />
    </svg>
  );
};
export default UpOneSVG;
