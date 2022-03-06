import { Icons } from "components/Icons";

type TitleProps = {};

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="title">
      {children}{" "}
      <span className="title__showmore">
        Show more <Icons.Arrow />
      </span>
    </h1>
  );
};

export default Title;
