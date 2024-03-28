import { FC } from "react";
import { CommonSVGProps } from "../../types";

const PlusSVG: FC<CommonSVGProps> = ({
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
        d="M24.0632 8.00006C25.1677 8.0015 26.062 8.89811 26.0605 10.0027L26.0239 38.0026C26.0225 39.1072 25.1259 40.0015 24.0213 40C22.9167 39.9986 22.0225 39.102 22.0239 37.9974L22.0605 9.99744C22.062 8.89287 22.9586 7.99861 24.0632 8.00006Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 23.9999C8 22.8954 8.89543 21.9999 10 21.9999H38C39.1046 21.9999 40 22.8954 40 23.9999C40 25.1045 39.1046 25.9999 38 25.9999H10C8.89543 25.9999 8 25.1045 8 23.9999Z"
        fill={fill}
      />
    </svg>
  );
};

export default PlusSVG;
