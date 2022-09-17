import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import EmptyCart from "../components/EmptyCart";
import { RootState } from "../redux/store";

interface Props {
}

const Cart = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  if (cart.length < 1) return <EmptyCart />;

  return (
    <div className="container my-4">
      <div className="text-center mb-2 font-bold">Navigation</div>
      <div className="flex flex-col gap-2">
        {cart.map((product) => (
          <Card key={product.prod.id} grid product={product.prod} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
