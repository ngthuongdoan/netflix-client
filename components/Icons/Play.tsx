import { IconProps } from ".";

const Play: React.VFC<IconProps> = ({ size = 24, className = "", color = "#000" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} className={className} viewBox="0 0 24 24">
      <path d="M3 2.691a1 1 0 011.482-.876l16.925 9.309a1 1 0 010 1.752L4.482 22.185A1 1 0 013 21.309V2.69z"></path>
    </svg>
  );
};

export default Play;
