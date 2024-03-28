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
        d="M24 28C15.1634 28 8 35.1634 8 44C8 45.1046 7.10457 46 6 46C4.89543 46 4 45.1046 4 44C4 32.9543 12.9543 24 24 24C35.0457 24 44 32.9543 44 44C44 45.1046 43.1046 46 42 46C40.8954 46 40 45.1046 40 44C40 35.1634 32.8366 28 24 28Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6C20.6863 6 18 8.68629 18 12C18 15.3137 20.6863 18 24 18C27.3137 18 30 15.3137 30 12C30 8.68629 27.3137 6 24 6ZM14 12C14 6.47715 18.4772 2 24 2C29.5228 2 34 6.47715 34 12C34 17.5228 29.5228 22 24 22C18.4772 22 14 17.5228 14 12Z"
        fill={fill}
      />
    </svg>
  );
};
export default UserSVG;
