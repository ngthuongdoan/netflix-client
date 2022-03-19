import { Icons } from "components/Icons";

type TitleProps = {
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`title ${className}`}>
      {children}{" "}
      <span className="title__showmore">
        Show more <Icons.Arrow />
      </span>
    </h1>
  );
};

export default Title;
