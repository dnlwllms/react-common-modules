import { FC } from "react";
import { CommonSVGProps } from "../../types";

const CloseOneSVG: FC<CommonSVGProps> = ({
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
        d="M2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0711 16.929C30.2901 16.148 29.0238 16.148 28.2427 16.929L16.929 28.2428C16.148 29.0238 16.148 30.2901 16.929 31.0712C17.7101 31.8522 18.9764 31.8522 19.7574 31.0712L31.0711 19.7575C31.8522 18.9764 31.8522 17.7101 31.0711 16.929Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9289 16.929C17.7099 16.148 18.9762 16.148 19.7573 16.929L31.071 28.2428C31.852 29.0238 31.852 30.2901 31.071 31.0712C30.2899 31.8522 29.0236 31.8522 28.2426 31.0712L16.9289 19.7575C16.1478 18.9764 16.1478 17.7101 16.9289 16.929Z"
        fill={fill}
      />
    </svg>
  );
};
export default CloseOneSVG;
