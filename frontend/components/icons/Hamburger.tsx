import React, { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

const Hamburger: React.FC<Props> = ({ active, ...props }) => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2" y="5" width="19" height="2" rx="1" fill="#F5F5F5" />
    <rect
      x="2"
      y="11"
      width={active ? "19" : "11"}
      height="2"
      rx="1"
      fill="#F5F5F5"
      className="transition-all"
    />
    <rect
      x="2"
      y="17"
      width={active ? "19" : "16"}
      height="2"
      rx="1"
      fill="#F5F5F5"
      className="transition-all"
    />
  </svg>
);

export default Hamburger;
