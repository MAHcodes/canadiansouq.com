import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href: string;
  Icon: JSX.Element;
  text: string;
}

const Info: React.FC<Props> = ({ href, Icon, text, className, ...props }) => (
  <div className={`my-2 ${className}`} {...props}>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-base"
    >
      {Icon}
      <span className="hover:text-white active:text-white focus:text-white hover:underline focus:underline active:underline transition-all">
        {text}
      </span>
    </a>
  </div>
);

export default Info;
