import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  children: JSX.Element;
}

const Box = ({ title, className, children, ...props }: Props) => (
  <div
    className={`border rounded-md p-2 pt-5 mt-2 relative flex-1 ${className}`}
    {...props}
  >
    <p className="text-base bg-fff absolute top-0 translate-y-[-50%] px-2">
      {title}
    </p>
    {children}
  </div>
);

export default Box;
