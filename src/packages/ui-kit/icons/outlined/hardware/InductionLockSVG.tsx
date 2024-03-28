import { FC } from "react";
import { CommonSVGProps } from "../../types";

const InductionLockSVG: FC<CommonSVGProps> = ({
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
        d="M22.7507 4.43826C23.4811 3.85391 24.519 3.85391 25.2495 4.43826L40.249 16.4379C40.2492 16.438 40.2493 16.4382 40.2495 16.4383L45.2495 20.4383C46.112 21.1283 46.2518 22.3869 45.5618 23.2494C44.8718 24.1119 43.6132 24.2518 42.7507 23.5617L41.0001 22.1612V42C41.0001 43.1046 40.1046 44 39.0001 44H9.00007C7.8955 44 7.00007 43.1046 7.00007 42V22.1612L5.24946 23.5617C4.38694 24.2518 3.12836 24.1119 2.43834 23.2494C1.74832 22.3869 1.88816 21.1283 2.75068 20.4383L7.75068 16.4383C7.75088 16.4381 7.75108 16.4379 7.75128 16.4378L22.7507 4.43826ZM11.0001 18.9612L24.0001 8.56125L37.0001 18.9612V40H11.0001V18.9612Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 20C25.1046 20 26 20.8954 26 22V34C26 35.1046 25.1046 36 24 36C22.8954 36 22 35.1046 22 34V22C22 20.8954 22.8954 20 24 20Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 24C32.1046 24 33 24.8954 33 26V30C33 31.1046 32.1046 32 31 32C29.8954 32 29 31.1046 29 30V26C29 24.8954 29.8954 24 31 24Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 24C18.1046 24 19 24.8954 19 26V30C19 31.1046 18.1046 32 17 32C15.8954 32 15 31.1046 15 30V26C15 24.8954 15.8954 24 17 24Z"
        fill={fill}
      />
    </svg>
  );
};

export default InductionLockSVG;
