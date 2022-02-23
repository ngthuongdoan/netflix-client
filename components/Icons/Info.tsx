import { IconProps } from ".";

const Info: React.VFC<IconProps> = ({ size = 24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#fff" className="Hawkins-Icon Hawkins-Icon-Standard" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-2v8h-2v-8h2zm-1-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Info;
