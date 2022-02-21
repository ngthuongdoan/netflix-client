import { IconProps } from ".";

const Facebook: React.VFC<IconProps> = ({ size = 24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" className="svg-icon svg-icon-facebook-logo" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.987 13.162v8.822h-3.945v-8.822h-3.2v-3.65h3.205v-2.78c0-3.165 1.885-4.912 4.768-4.912.947.013 1.891.096 2.826.247v3.106h-1.596a1.825 1.825 0 00-2.058 1.972v2.367h3.5l-.56 3.65h-2.94z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Facebook;
