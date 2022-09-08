import { NextRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../Button";
import { Bookmark, Cart } from "../icons";

const Buttons = ({router}: {router: NextRouter}) => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.length);

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        color="transparent"
        icon={<Bookmark clr="stroke-white" />}
        onClick={() => router.push("/wishlist?page=0")}
      />
      <Button color="transparent" className="relative p-1" icon={<Cart />}
        onClick={() => router.push("/mycart")}
      >
        <span className="absolute top-[-4px] right-[-4px] font-bold bg-success rounded-full px-[.25rem] text-xs">
          {cartItemsCount}
        </span>
      </Button>
    </div>
  );
};

export default Buttons;
