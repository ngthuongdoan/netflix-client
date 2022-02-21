import { IconProps } from ".";

const Plus: React.VFC<IconProps> = ({ size = 26 }) => {
  return (
    <svg className="svg-icon svg-icon-thin-x svg-closed" width={size} height={size} viewBox="0 0 26 26">
      <path fill="#fff" d="M10.5 9.3L1.8.5.5 1.8l8.8 8.7-8.8 8.8 1.3 1.2 8.7-8.7 8.8 8.7 1.2-1.2-8.7-8.8 8.7-8.7L19.3.5l-8.8 8.8z"></path>
    </svg>
  );
};

export default Plus;
