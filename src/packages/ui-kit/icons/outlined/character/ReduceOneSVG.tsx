import { FC } from "react";
import { CommonSVGProps } from "../../types";

const ReduceOneSVG: FC<CommonSVGProps> = ({
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
        d="M14 24C14 22.8954 14.8954 22 16 22L32 22C33.1046 22 34 22.8954 34 24C34 25.1046 33.1046 26 32 26L16 26C14.8954 26 14 25.1046 14 24Z"
        fill={fill}
      />
    </svg>
  );
};
export default ReduceOneSVG;
