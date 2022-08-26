import React from "react";
import { Mail, Phone } from "../icons";
import Info from "./Info";
import Title from "./Title";

const ContactUs = () => (
  <div>
    <Title text="Contact Us" />
    <Info href="tel:+96181921320" Icon={<Phone />} text="+961 81 921 320" />
    <Info
      href="mailto:canadiansouq@gmail.com"
      Icon={<Mail />}
      text="canadiansouq@gmail.com"
    />
  </div>
);

export default ContactUs;
