import React from "react";
import { IProduct } from "../../types";
import Button from "../Button";
import { Minus, Plus } from "../icons";
import {
  increment as incQty,
  decrement as decQty,
} from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  grid?: boolean;
  product: IProduct;
}

const CartButtons = ({ grid, product }: Props) => {
  const [item] = useSelector((state: RootState) => state.cart.filter(item => item.prod.id === product.id));
  const dispatch = useDispatch();

  return (
    <div className="flex items-stretch justify-end gap-2 mt-2">
      <div className="flex items-center gap-2">
      <Button
        variant="transparent"
        size="sm"
        icon={<Minus />}
        disabled={item.qty <= 1}
        onClick={() => dispatch(decQty(product.id))}
      />
      <span className="font-bold">{
          item.qty
        }</span>
      <Button
        variant="transparent"
        size="sm"
        icon={<Plus/>}
        onClick={() => dispatch(incQty(product.id))}
        disabled={item.qty >= item.prod.attributes.availability!}
      />
      </div>
    </div>
  );
};

export default CartButtons;
