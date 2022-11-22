import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href: string;
  Icon: JSX.Element;
  text: string;
}

const Info: React.FC<Props> = ({ href, Icon, text, className, ...props }) => (
  <div className={`my-2 group ${className}`} {...props}>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-base"
    >
      {Icon}
      <span className="group-hover:text-white group-active:text-white group-focus:text-white hover:underline focus:underline active:underline transition-all">
        {text}
      </span>
    </a>
  </div>
);

export default Info;
