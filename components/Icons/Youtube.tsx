import { IconProps } from ".";

const Youtube: React.VFC<IconProps> = ({ size = 24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" className="svg-icon svg-icon-youtube-logo" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.54 6.67a2.763 2.763 0 00-1.94-1.957C18.88 4.25 12 4.25 12 4.25s-6.88 0-8.6.463A2.763 2.763 0 001.46 6.67 28.985 28.985 0 001 12a28.985 28.985 0 00.46 5.33 2.763 2.763 0 001.945 1.957c1.715.463 8.6.463 8.6.463s6.88 0 8.595-.463a2.763 2.763 0 001.94-1.957c.317-1.759.471-3.543.46-5.33a28.987 28.987 0 00-.46-5.33zm-12.79 8.6V8.729L15.5 12l-5.75 3.27z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Youtube;
