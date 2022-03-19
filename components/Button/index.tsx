import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import ButtonSlide from "./ButtonSlide";

export type ButtonProps = {
  icon?: React.ReactNode;
  loading?: boolean;
  iconPosition?: "start" | "end";
  className?: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type StaticProps = {
  Slide: typeof ButtonSlide;
};

const Button: React.VFC<ButtonProps> & StaticProps = ({ children, icon, className = "button-main", loading = false, iconPosition, ...rest }) => {
  return (
    <button className={className} disabled={rest.disabled || loading} {...rest}>
      {icon ? (
        iconPosition ? (
          iconPosition === "start" ? (
            //   Icon on start
            <>
              <div>{icon}</div>
              <span className="flex-grow">{children}</span>
            </>
          ) : (
            //   Icon end
            <>
              <span className="flex-grow">{children}</span>
              <div>{icon}</div>
            </>
          )
        ) : (
          // Don't have position -> DEFAULT start
          <>
            <div>{icon}</div>
            <span className="flex-grow">{children}</span>
          </>
        )
      ) : (
        //   Don't have icon
        <>
          <span className="flex-grow">{children}</span>
        </>
      )}
    </button>
  );
};

Button.displayName = "Button";
Button.Slide = ButtonSlide;
export default Button;
