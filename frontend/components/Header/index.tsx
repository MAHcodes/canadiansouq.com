import Link from "next/link";

interface Props {
  categories: string[];
}

const Header = ({ categories }: Props) => {
  return (
    <header className="bg-black text-white rounded-b-lg sticky top-0 left-0 right-0 z-40">
      <div className="container py-4">
        <Link href="/" passHref>
          <h1 className="cursor-pointer font-bold 2xl:flex-1">Canadian Souq</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
