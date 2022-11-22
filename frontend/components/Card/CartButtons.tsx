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
import Pricing from "./Pricing";

interface Props {
  product: IProduct;
  qty: number;
}

const CartButtons = ({ product, qty }: Props) => {
  const dispatch = useDispatch();
  const isMyCart = router.pathname.includes("my-cart");

  return (
    <div className="flex items-center justify-end gap-2 mt-4 pt-2 border-t-gray border-t border-opacity-50">
      <span className="text-xs font-bold">Qty: </span>
      <div className="flex items-center flex-col-reverse gap-1">
        <Button
          variant="transparent"
          size="sm"
          icon={<Minus />}
          disabled={qty <= 1 || !isMyCart}
          onClick={() => dispatch(decQty(product.id))}
        />
        <span className="font-bold">{qty}</span>
        <Button
          variant="transparent"
          size="sm"
          icon={<Plus />}
          onClick={() => dispatch(incQty(product.id))}
          disabled={!isMyCart}
          /* disabled={item.qty >= item.prod.attributes.availability!} */
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold">x</span>
        <Pricing
          cost={product.attributes.cost}
          price={product.attributes.price}
        />
        <span className="font-bold">=</span>
        <Pricing
          cost={product.attributes.cost! * qty}
          price={product.attributes.price! * qty}
        />
      </div>
    </div>
  );
};

export default CartButtons;
