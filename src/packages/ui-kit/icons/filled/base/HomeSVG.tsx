import { FC } from "react";
import { CommonSVGProps } from "../../types";

const HomeSVG: FC<CommonSVGProps> = ({
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
        d="M25.2495 4.43826C24.519 3.85391 23.4811 3.85391 22.7507 4.43826L2.75068 20.4383C1.88816 21.1283 1.74832 22.3869 2.43834 23.2494C3.12836 24.1119 4.38694 24.2518 5.24946 23.5617L7.00007 22.1612V42C7.00007 43.1046 7.8955 44 9.00007 44H39.0001C40.1046 44 41.0001 43.1046 41.0001 42V22.1612L42.7507 23.5617C43.6132 24.2518 44.8718 24.1119 45.5618 23.2494C46.2518 22.3869 46.112 21.1283 45.2495 20.4383L25.2495 4.43826ZM17 29C17 27.8954 17.8954 27 19 27H29C30.1046 27 31 27.8954 31 29V40H27V31H21V40H17V29Z"
        fill={fill}
      />
    </svg>
  );
};
export default HomeSVG;
