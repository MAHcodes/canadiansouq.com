import { Mail, Phone } from "../icons";
import Info from "./Info";
import Title from "./Title";

const ContactUs = () => (
  <div className="flex flex-col items-start">
    <Title text="Contact Us" />
    <Info href="tel:+96181921320" Icon={<Phone />} text="+961 81 921 320" />
    <Info
      href="mailto:contact@canadiansouq.com"
      Icon={<Mail />}
      text="canadiansouq@gmail.com"
    />
  </div>
);

export default ContactUs;
