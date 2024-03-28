import { FC } from "react";
import { CommonSVGProps } from "../../types";

const UserSVG: FC<CommonSVGProps> = ({
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
        d="M24.0085 9.99985C25.1131 9.99997 26.0084 10.8955 26.0083 12.0001L26.0072 23.1804L33.9007 31.0739C34.6818 31.8549 34.6818 33.1212 33.9007 33.9023C33.1197 34.6833 31.8533 34.6833 31.0723 33.9023L22.5929 25.4229C22.2178 25.0478 22.0071 24.539 22.0071 24.0085L22.0083 11.9997C22.0084 10.8951 22.904 9.99974 24.0085 9.99985Z"
        fill={fill}
      />
    </svg>
  );
};
export default UserSVG;
