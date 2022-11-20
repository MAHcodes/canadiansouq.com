import React from "react";
import { IProduct } from "../../types";
import Button from "../Button";
import { Minus, Plus } from "../icons";
import {
  increment as incQty,
  decrement as decQty,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import router from "next/router";

interface Props {
  product: IProduct;
  qty: number;
}

const CartButtons = ({ product, qty }: Props) => {
  const dispatch = useDispatch();
  const isMyCart = router.pathname.includes("my-cart");

  return (
    <div className="flex items-stretch justify-end gap-2 mt-2">
      <div className="flex items-center gap-2">
      <span className="text-xs font-bold">Qty: </span>
      <Button
        variant="transparent"
        size="sm"
        icon={<Minus />}
        disabled={qty <= 1 || !isMyCart}
        onClick={() => dispatch(decQty(product.id))}
      />
      <span className="font-bold">{ qty }</span>
      <Button
        variant="transparent"
        size="sm"
        icon={<Plus/>}
        onClick={() => dispatch(incQty(product.id))}
        disabled={!isMyCart}
        /* disabled={item.qty >= item.prod.attributes.availability!} */
      />
      </div>
    </div>
  );
};

export default CartButtons;
