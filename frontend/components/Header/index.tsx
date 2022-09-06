import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import Buttons from "./Buttons";
import NavBar from "./NavBar";

interface Props {
  categories: string[];
}

const Header = ({ categories }: Props) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const toggleNav = () => {
    if (checkboxRef.current)
      checkboxRef.current.checked = !checkboxRef.current?.checked;
  };

  return (
    <header className="bg-black text-white rounded-b-lg sticky top-0 left-0 right-0 z-40">
      <div className="container py-4 flex items-center justify-between gap-4 relative">
        <button className="lg:hidden" onClick={toggleNav}>toggle</button>
        <span className="flex-1 lg:flex-initial">
        <Link href="/" passHref>
          <h1 className="cursor-pointer w-fit font-bold">Canadian Souq</h1>
        </Link>
        </span>
        <NavBar checkboxRef={checkboxRef} categories={categories} />
        <Buttons router={router} />
      </div>
    </header>
  );
};

export default Header;
