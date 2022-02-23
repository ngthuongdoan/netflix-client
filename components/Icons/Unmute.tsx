import { IconProps } from ".";

const Unmute: React.VFC<IconProps> = ({ size = 24, className = "", onClick }) => {
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#fff" className={className} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M24 12a14 14 0 00-4.1-9.9l-1.415 1.415a12 12 0 010 16.97L19.9 21.9A14 14 0 0024 12zM11 4a1 1 0 00-1.707-.707L4.586 8H1a1 1 0 00-1 1v6a1 1 0 001 1h3.586l4.707 4.707A1 1 0 0011 20V4zM5.707 9.707L9 6.414v11.172l-3.293-3.293L5.414 14H2v-4h3.414l.293-.293zM16 12a6 6 0 00-1.757-4.243l-1.415 1.415a4 4 0 010 5.656l1.415 1.415A6 6 0 0016 12zm1.07-7.071a10 10 0 010 14.142l-1.413-1.414a8 8 0 000-11.314L17.07 4.93z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Unmute;
