interface Props {
  categories: string[];
}

const Header = ({ categories }: Props) => {
  return (
    <header className="bg-black text-white rounded-b-lg sticky top-0 left-0 right-0 z-40">
      <div className="container py-5">
        <ul>
          {categories.map((category: string) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
