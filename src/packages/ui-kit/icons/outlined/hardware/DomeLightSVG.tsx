import { FC } from "react";
import { CommonSVGProps } from "../../types";

const DomeLightSVG: FC<CommonSVGProps> = ({
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
        d="M6.10986 26H41.8901C40.8953 17.0001 33.2651 10 24 10C14.7349 10 7.10475 17.0001 6.10986 26ZM2 28C2 15.8497 11.8497 6 24 6C36.1503 6 46 15.8497 46 28C46 29.1046 45.1046 30 44 30H4C2.89543 30 2 29.1046 2 28Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 2C25.1046 2 26 2.89543 26 4V8C26 9.10457 25.1046 10 24 10C22.8954 10 22 9.10457 22 8V4C22 2.89543 22.8954 2 24 2Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.252 30H31.748C30.8599 33.4505 27.7277 36 24 36C20.2723 36 17.1401 33.4505 16.252 30ZM12 28C12 34.6274 17.3726 40 24 40C30.6274 40 36 34.6274 36 28C36 26.8954 35.1046 26 34 26H14C12.8954 26 12 26.8954 12 28Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.181 40.6149C40.2762 41.2485 39.0291 41.0286 38.3956 40.1238L36.3275 37.1703C35.694 36.2655 35.9139 35.0184 36.8187 34.3848C37.7235 33.7513 38.9706 33.9712 39.6041 34.876L41.6722 37.8295C42.3057 38.7343 42.0858 39.9814 41.181 40.6149Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6891 34.8112C12.4702 35.5922 12.4702 36.8586 11.6891 37.6396L9.13961 40.1891C8.35856 40.9702 7.09223 40.9702 6.31118 40.1891C5.53013 39.4081 5.53013 38.1417 6.31118 37.3607L8.86069 34.8112C9.64174 34.0301 10.9081 34.0301 11.6891 34.8112Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.1473 43.6384C34.2425 44.2719 32.9954 44.052 32.3619 43.1472L31.2147 41.5089C30.5812 40.6041 30.8011 39.357 31.7059 38.7235C32.6107 38.0899 33.8578 38.3098 34.4913 39.2146L35.6385 40.8529C36.272 41.7577 36.0522 43.0048 35.1473 43.6384Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5475 39.0597C17.3286 39.8408 17.3286 41.1071 16.5475 41.8881L15.1333 43.3024C14.3523 44.0834 13.0859 44.0834 12.3049 43.3024C11.5238 42.5213 11.5238 41.255 12.3049 40.4739L13.7191 39.0597C14.5001 38.2787 15.7665 38.2787 16.5475 39.0597Z"
        fill={fill}
      />
    </svg>
  );
};

export default DomeLightSVG;
