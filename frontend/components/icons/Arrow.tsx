import React, { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  clr?: string;
}

export const Arrow:React.FC<Props>  = (props) => (
  <svg width="20" height="21" viewBox="0 0 18 19" fill="none" {...props}>
    <path
      d="M4.5 7.05497L9 11.7325L13.5 7.05497"
      stroke={props.clr || "#242424"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
