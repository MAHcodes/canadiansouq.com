import { Whatsapp, Instagram, Facebook } from "../icons";
import Title from "./Title";

const FollowUs = () => (
  <div className="md:order-2">
    <Title text="Follow Us" />
    <SocialIcons>
      <>
        <Whatsapp />
        <Instagram />
        <Facebook />
      </>
    </SocialIcons>
  </div>
);

const SocialIcons = ({ children }: { children: JSX.Element }) => (
  <div className="inline-flex items-center justify-between gap-2">
    {children}
  </div>
);

export default FollowUs;
