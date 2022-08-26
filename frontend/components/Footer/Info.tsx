import React from "react";

interface Props {
  href: string;
  Icon: JSX.Element;
  text: string;
}

const Info = ({ href, Icon, text }: Props) => (
  <div className="my-2">
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
