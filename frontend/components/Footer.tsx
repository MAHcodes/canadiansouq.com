import React from "react";
import { Facebook, Instagram, Mail, Phone, Whatsapp } from "./icons";

export const Footer = () => {
  return (
    <div className="bg-black text-gray rounded-t-lg mt-4">
      <div className="container py-5">
        <div>
          <Title text="Contact Us" />
          <Info
            href="tel:+96181921320"
            Icon={<Phone />}
            text="+961 81 921 320"
          />
          <Info
            href="mailto:canadiansouq@gmail.com"
            Icon={<Mail />}
            text="canadiansouq@gmail.com"
          />
        </div>
        <div>
          <Title text="Follow Us" />
          <SocialIcons>
            <>
              <Whatsapp />
              <Instagram />
              <Facebook />
            </>
          </SocialIcons>
        </div>
      </div>
    </div>
  );
};

interface InfoProps {
  href: string;
  Icon: JSX.Element;
  text: string;
}

const Info = ({ href, Icon, text }: InfoProps) => (
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

const Title = ({ text }: { text: string }) => (
  <h4 className="text-white text-lg font-bold mb-4">{text}</h4>
);

const SocialIcons = ({ children }: { children: JSX.Element }) => (
  <div className="inline-flex items-center justify-between gap-2">
    {children}
  </div>
);
