import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import EmptyCart from "../components/EmptyCart";
import Navigation from "../components/Navigation";
import useCartProps from "../hooks/useCartProps";
import { RootState } from "../redux/store";

interface Props {
}

const MyCart = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  if (cart.length < 1) return <EmptyCart />;

  /* useEffect(() => {
    router.query.cart = "2x3n3x8";
    router.push(router)
  }, []) */

  /* console.log(router.query.cart) */

  const router= useRouter();
  const urlProps = useCartProps({ router, cart });
  console.log(urlProps)

  return (
    <div className="container my-4">
      <Navigation title="My Cart"><span /></Navigation>
      <div className="flex flex-col gap-2">
        {cart.map((product) => (
          <Card key={product.prod.id} grid product={product.prod} />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
