import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import EmptyCart from "../components/EmptyCart";
import Navigation from "../components/Navigation";
import { RootState } from "../redux/store";

interface Props {}

const MyCart = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart);

  if (cart.length < 1) return <EmptyCart />;

  /* useEffect(() => {
    router.query.cart = "2x3n3x8";
    router.push(router)
  }, []) */

  /* console.log(router.query.cart) */

  const urlProps = cart!.map((item) => `${item.prod.id}x${item.qty}`).join("n");

  return (
    <div className="container my-4">
      <Navigation title="My Cart">
        <span />
      </Navigation>
      <div className="flex flex-col gap-2">
        {cart.map((product) => (
          <Card
            key={product.prod.id}
            grid
            product={product.prod}
            qty={product.qty}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
