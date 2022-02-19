import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
type ButtonProps = {
  icon?: React.ReactNode;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, icon, className, ...rest }) => {
  return (
    <button className={`button-main ${className}`} {...rest}>
      <span className="flex-grow">{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
