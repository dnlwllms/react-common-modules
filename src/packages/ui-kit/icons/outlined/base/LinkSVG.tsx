import { FC } from "react";
import { CommonSVGProps } from "../../types";

const LinkSVG: FC<CommonSVGProps> = ({
  width = 48,
  height = 48,
  fill = "#111111",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.3641 9.56502C33.4883 6.44083 38.5536 6.44083 41.6778 9.56502C44.802 12.6892 44.802 17.7545 41.6778 20.8787L24.0001 38.5564C19.7044 42.8522 12.7396 42.8522 8.4438 38.5564C4.14803 34.2606 4.14803 27.2958 8.4438 23.0001L23.293 8.15081C24.0741 7.36976 25.3404 7.36976 26.1215 8.15081C26.9025 8.93186 26.9025 10.1982 26.1215 10.9792L11.2722 25.8285C8.53855 28.5621 8.53855 32.9943 11.2722 35.728C14.0059 38.4616 18.438 38.4616 21.1717 35.728L38.8494 18.0503C40.4115 16.4882 40.4115 13.9555 38.8494 12.3934C37.2873 10.8314 34.7546 10.8314 33.1925 12.3934L15.5149 30.0711C15.1243 30.4616 15.1243 31.0948 15.5149 31.4853C15.9054 31.8759 16.5386 31.8759 16.9291 31.4853L31.7783 16.6361C32.5594 15.855 33.8257 15.855 34.6067 16.6361C35.3878 17.4171 35.3878 18.6835 34.6067 19.4645L19.7575 34.3138C17.8049 36.2664 14.6391 36.2664 12.6864 34.3138C10.7338 32.3611 10.7338 29.1953 12.6864 27.2427L30.3641 9.56502Z"
        fill={fill}
      />
    </svg>
  );
};
export default LinkSVG;
