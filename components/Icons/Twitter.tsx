import { IconProps } from ".";

const Twitter: React.VFC<IconProps> = ({ size = 24 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" className="svg-icon svg-icon-twitter-logo" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.768 8.207A12.654 12.654 0 018.027 20.948a12.653 12.653 0 01-6.876-2.01c.359.04.72.058 1.08.055a8.966 8.966 0 005.56-1.913A4.486 4.486 0 013.6 13.974c.28.045.563.068.846.07a4.72 4.72 0 001.178-.153A4.478 4.478 0 012.038 9.5v-.059c.62.347 1.314.542 2.024.569a4.488 4.488 0 01-1.387-5.99 12.727 12.727 0 009.234 4.686 4.995 4.995 0 01-.11-1.025 4.482 4.482 0 017.75-3.064 8.819 8.819 0 002.84-1.082A4.464 4.464 0 0120.422 6 8.99 8.99 0 0023 5.31a9.644 9.644 0 01-2.246 2.315c.014.195.014.389.014.582z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Twitter;
