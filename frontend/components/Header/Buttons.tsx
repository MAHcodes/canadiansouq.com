import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../Button";
import { Bookmark, Cart } from "../icons";

const Buttons = () => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.length);

  return (
    <div className="flex items-center gap-2">
      <Link href="/wishlist?page=0">
      <Button
        size="sm"
        color="transparent"
        icon={<Bookmark clr="stroke-white" />}
      />
      </Link>
      <Link href="/my-cart">
      <Button color="transparent" className="relative p-1" icon={<Cart />}>
        <span className="absolute top-[-4px] right-[-4px] font-bold bg-success rounded-full px-[.25rem] text-xs max-w-[4ch]">
          {cartItemsCount}
        </span>
      </Button>
      </Link>
    </div>
  );
};

export default Buttons;
