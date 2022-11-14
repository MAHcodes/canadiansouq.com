import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../types";
import Button from "../Button";
import { Bookmark } from "../icons";
import {
  add as addToCart,
  remove as removeFromCart,
} from "../../redux/cartSlice";
import {
  add as addToWishlist,
  remove as removeFromWishlist,
} from "../../redux/wishlistSlice";

interface Props {
  grid?: boolean;
  product: IProduct;
}

const Buttons = ({ grid, product }: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="flex items-stretch justify-end gap-2 mt-2">
      {cart.some((item) => item.prod.id === product.id) ? (
        <Button
          size="md"
          variant="secondary"
          className={`whitespace-nowrap ${grid ? "" : "flex-1"}`}
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          Remove item
        </Button>
      ) : (
        <Button
          size="md"
          className={`${grid ? "" : "flex-1"}`}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </Button>
      )}
      {wishlist.some((item) => item.id === product.id) ? (
        <Button
          variant="secondary"
          size="md"
          onClick={() => dispatch(removeFromWishlist(product.id))}
          icon={<Bookmark clr="fill-black" />}
          className="hidden md:block"
        />
      ) : (
        <Button
          variant="secondary"
          size="md"
          onClick={() => dispatch(addToWishlist(product))}
          icon={<Bookmark />}
          className="hidden md:block"
        />
      )}
    </div>
  );
};

export default Buttons;
