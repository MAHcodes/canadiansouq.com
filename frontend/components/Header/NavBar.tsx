import Link from "next/link";

interface Props {
  categories: string[];
  checkboxRef: any;
}

const NavBar = ({ categories, checkboxRef }: Props) => {
  return (
    <>
      <input type="checkbox" className="peer hidden" ref={checkboxRef} />
      <ul className="hidden lg:flex peer-checked:flex peer-checked:absolute bottom-[-.5rem] left-4 right-4 peer-checked:translate-y-full peer-checked:bg-black peer-checked:p-4 peer-checked:flex-col rounded-lg items-center gap-6 text-base text-white text-opacity-80">
        {categories.map((category) => (
          <li
            className="hover:text-white hover:underline"
            key={category}
            onClick={() => {
              if (checkboxRef.current?.checked)
                checkboxRef.current.checked = false;
            }}
          >
            <Link href={`/${category}?page=0`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
