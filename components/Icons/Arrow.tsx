import { IconProps } from ".";

const Arrow: React.VFC<IconProps> = ({ size = 6 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 6) / 12}
      viewBox="0 0 6 12"
    >
      <path
        fill="none"
        fillRule="evenodd"
        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
      ></path>
    </svg>
  );
};

export default Arrow;
