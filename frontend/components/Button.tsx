import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

const sizes = {
  lg: "py-3 px-6 text-base",
  md: "py-2 px-4 text-sm",
  sm: "py-1 px-2 text-xs",
  "": "",
};

const iconSized = {
  lg: "p-3",
  md: "p-2",
  sm: "p-1",
  "": "",
};

const variants = {
  primary: "text-white bg-black border-transparent",
  primaryDark: "text-black bg-fff border-transparent",
  secondary: "text-black bg-transparent border-black",
  transparent:
    "border-transparent hover:bg-gray hover:bg-opacity-20 active:bg-gray active:bg-opacity-30",
};

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: keyof typeof sizes | "";
  variant?: keyof typeof variants;
  icon?: ReactNode;
  iconAfter?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  size = "",
  variant = "primary",
  className = "",
  icon,
  iconAfter,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`rounded-md font-bold text-base flex items-center justify-center cursor-pointer border-2 gap-2
         ${disabled ? "cursor-not-allowed opacity-40" : ""}
         ${children ? sizes[size] : iconSized[size]}
         ${variants[variant]}
         ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {icon ? <span className={iconAfter ? "order-2" : ""}>{icon}</span> : null}
      {children}
    </button>
  );
};

export default Button;
