import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { Close } from "../icons";
import Pricing from "./Pricing";
import { remove as removeFromCart } from "../../redux/cartSlice";
import router from "next/router";

interface Props {
  brand?: string;
  cost?: number;
  price?: number;
  qty?: number;
  prodID: number;
}

const Header = ({ prodID, brand, cost, price, qty }: Props) => {
  const dispatch = useDispatch();
  const isMyCart = router.pathname.includes("my-cart");

  return <div className={`flex items-center justify-between`}>
    <div>
      <h2 className="text-base text-gray">{brand}</h2>
    </div>
    {qty ? 
    <Button
      variant="secondary"
      icon={<Close />}
      onClick={() => dispatch(removeFromCart(prodID))}
      disabled={!isMyCart}
    /> :
    <Pricing cost={cost} price={price} />}
  </div>
};

export default Header;
