import { SVGProps } from "react";

export const Close: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    {...props}
  >
    <path
      d="M8.46445 15.5354L15.5355 8.46436"
      stroke="#242424"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M8.46446 8.46458L15.5355 15.5356"
      stroke="#242424"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
