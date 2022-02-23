import { IconProps } from ".";

const Muted: React.VFC<IconProps> = ({ size = 24, className = "", onClick }) => {
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#fff" className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M11 4a1 1 0 00-1.707-.707L4.586 8H1a1 1 0 00-1 1v6a1 1 0 001 1h3.586l4.707 4.707A1 1 0 0011 20V4zM5.707 9.707L9 6.414v11.172l-3.293-3.293L5.414 14H2v-4h3.414l.293-.293zm9.586 0L17.586 12l-2.293 2.293 1.414 1.414L19 13.414l2.293 2.293 1.414-1.414L20.414 12l2.293-2.293-1.414-1.414L19 10.586l-2.293-2.293-1.414 1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Muted;
