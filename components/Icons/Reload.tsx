import { IconProps } from ".";

const Reload: React.VFC<IconProps> = ({ size = 24, className = "", onClick }) => {
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#fff" className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M13.175 3.077a9 9 0 106.62 13.423l-1.733-1a7 7 0 11.879-4.408l-1.386-.924-1.11 1.664 3 2a1 1 0 001.11 0l3-2-1.11-1.664-1.485.99a9 9 0 00-7.785-8.081z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Reload;
