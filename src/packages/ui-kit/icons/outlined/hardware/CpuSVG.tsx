import { FC } from "react";
import { CommonSVGProps } from "../../types";

const CpuSVG: FC<CommonSVGProps> = ({
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
        d="M6 10C6 7.79086 7.79086 6 10 6H38C40.2091 6 42 7.79086 42 10V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V10ZM38 10H10V38H38V10Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18C16 16.8954 16.8954 16 18 16H30C31.1046 16 32 16.8954 32 18V30C32 31.1046 31.1046 32 30 32H18C16.8954 32 16 31.1046 16 30V18ZM20 20V28H28V20H20Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9092 0C16.0137 0 16.9092 0.89543 16.9092 2V8C16.9092 9.10457 16.0137 10 14.9092 10C13.8046 10 12.9092 9.10457 12.9092 8V2C12.9092 0.89543 13.8046 0 14.9092 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9092 38C16.0137 38 16.9092 38.8954 16.9092 40V46C16.9092 47.1046 16.0137 48 14.9092 48C13.8046 48 12.9092 47.1046 12.9092 46V40C12.9092 38.8954 13.8046 38 14.9092 38Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0C25.1046 0 26 0.89543 26 2V8C26 9.10457 25.1046 10 24 10C22.8954 10 22 9.10457 22 8V2C22 0.89543 22.8954 0 24 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 38C25.1046 38 26 38.8954 26 40V46C26 47.1046 25.1046 48 24 48C22.8954 48 22 47.1046 22 46V40C22 38.8954 22.8954 38 24 38Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.0908 0C34.1954 0 35.0908 0.89543 35.0908 2V8C35.0908 9.10457 34.1954 10 33.0908 10C31.9863 10 31.0908 9.10457 31.0908 8V2C31.0908 0.89543 31.9863 0 33.0908 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.0908 38C34.1954 38 35.0908 38.8954 35.0908 40V46C35.0908 47.1046 34.1954 48 33.0908 48C31.9863 48 31.0908 47.1046 31.0908 46V40C31.0908 38.8954 31.9863 38 33.0908 38Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.9092C0 13.8046 0.89543 12.9092 2 12.9092H8C9.10457 12.9092 10 13.8046 10 14.9092C10 16.0137 9.10457 16.9092 8 16.9092H2C0.89543 16.9092 0 16.0137 0 14.9092Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 14.9092C38 13.8046 38.8954 12.9092 40 12.9092H46C47.1046 12.9092 48 13.8046 48 14.9092C48 16.0137 47.1046 16.9092 46 16.9092H40C38.8954 16.9092 38 16.0137 38 14.9092Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 24C0 22.8954 0.89543 22 2 22H8C9.10457 22 10 22.8954 10 24C10 25.1046 9.10457 26 8 26H2C0.89543 26 0 25.1046 0 24Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 24C38 22.8954 38.8954 22 40 22H46C47.1046 22 48 22.8954 48 24C48 25.1046 47.1046 26 46 26H40C38.8954 26 38 25.1046 38 24Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 33.0908C0 31.9863 0.89543 31.0908 2 31.0908H8C9.10457 31.0908 10 31.9863 10 33.0908C10 34.1954 9.10457 35.0908 8 35.0908H2C0.89543 35.0908 0 34.1954 0 33.0908Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 33.0908C38 31.9863 38.8954 31.0908 40 31.0908H46C47.1046 31.0908 48 31.9863 48 33.0908C48 34.1954 47.1046 35.0908 46 35.0908H40C38.8954 35.0908 38 34.1954 38 33.0908Z"
        fill={fill}
      />
    </svg>
  );
};
export default CpuSVG;
