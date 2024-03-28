import { FC } from "react";
import { MultiColorSVGProps } from "../../types";

const CloseOneSVG: FC<MultiColorSVGProps> = ({
  width = 48,
  height = 48,
  fill = ["#111111", "#ffffff"],
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
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill={fill[0]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6Z"
        fill={fill[0]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0702 16.929C30.2891 16.148 29.0228 16.148 28.2417 16.929L16.928 28.2428C16.147 29.0238 16.147 30.2901 16.928 31.0712C17.7091 31.8522 18.9754 31.8522 19.7565 31.0712L31.0702 19.7575C31.8512 18.9764 31.8512 17.7101 31.0702 16.929Z"
        fill={fill[1]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9298 16.929C17.7109 16.148 18.9772 16.148 19.7583 16.929L31.072 28.2428C31.853 29.0238 31.853 30.2901 31.072 31.0712C30.2909 31.8522 29.0246 31.8522 28.2435 31.0712L16.9298 19.7575C16.1488 18.9764 16.1488 17.7101 16.9298 16.929Z"
        fill={fill[1]}
      />
    </svg>
  );
};
export default CloseOneSVG;
