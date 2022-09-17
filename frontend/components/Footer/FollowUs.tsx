import { Whatsapp, Instagram, Facebook } from "../icons";
import Info from "./Info";
import Title from "./Title";

const FollowUs = () => (
  <div className="md:order-2">
    <Title text="Follow Us" />
    <SocialIcons>
      <div className="flex flex-col items-start">
        <Info href="https://wa.me/+96181921230" Icon={<Whatsapp />} text="+961 81 921 320" className="group" />
        <Info href="https://instagram.com/canadiansouq" Icon={<Instagram />} text="@canadiansouq" className="group" />
        <Info href="https://facebook.com/canadiansouq" Icon={<Facebook />} text="/canadiansouq" className="group" />
      </div>
    </SocialIcons>
  </div>
);

const SocialIcons = ({ children }: { children: JSX.Element }) => (
  <div className="inline-flex items-center justify-between gap-2">
    {children}
  </div>
);

export default FollowUs;
