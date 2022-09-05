import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

const sizes = {
  lg: "py-3 px-6 text-base rounded-lg",
  md: "py-2 px-4 text-sm rounded-md",
  sm: "py-1 px-2 text-xs rounded-5",
};

const iconSized = {
  lg: "p-3",
  md: "p-2",
  sm: "p-1",
}

const colors = {
  primary: "text-white bg-black border-transparent",
  secondary: "text-black bg-transparent border-black border-solid",
  transparent: "border-transparent hover:bg-gray hover:bg-opacity-20",
};

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  icon?: ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  children,
  size = "md",
  color = "primary",
  icon,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`rounded-md font-bold text-base flex items-center justify-center cursor-pointer border-2 gap-2
         ${disabled ? "cursor-not-allowed opacity-50" : ""}
         ${ children ? sizes[size] : iconSized[size] }
         ${colors[color]}
      `}
      {...props}
    >
      {icon ? (
        <span className={size === "lg" ? "w-5" : "w-4"}>{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
