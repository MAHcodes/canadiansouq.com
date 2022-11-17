import { useRouter } from "next/router";
import { Arrow } from "./icons";
import Button from "./Button";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
}

const Navigation: React.FC<Props> = ({ children, title = "" }) => {
  const { back } = useRouter();

  return (
    <div className={`flex py-4 items-center justify-between gap-2 col-span-full`}>
      <Button
        onClick={() => back()}
        variant="transparent"
        icon={<Arrow className="rotate-90 w-6 h-6" />}
      />

      <h1 className="font-bold text-xl">{title}</h1>
      {children}
    </div>
  );
};

export default Navigation;
