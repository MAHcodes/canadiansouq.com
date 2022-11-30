import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Card from "../components/Card";
import EmptyCart from "../components/EmptyCart";
import { Whatsapp } from "../components/icons";
import Navigation from "../components/Navigation";
import { RootState } from "../redux/store";

interface Props { }

const MyCart = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart);

  if (cart.length < 1) return <EmptyCart />;

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
        <div className="bg-black text-white sticky bottom-2 p-4 rounded-md">
          <p className="mb-2 text-center">
            Total:
            <span className="font-bold">
              $
              {cart.reduce((accumulator, currentValue) => {
                return (
                  accumulator +
                  currentValue.prod.attributes.price! * currentValue.qty
                );
              }, 0)}
            </span>
          </p>
          <a
            href={`https://wa.me/+96181921320/?text=Hey check my cart... ${process.env.NEXT_PUBLIC_HOST || ""
              }/cart/?cart=${urlProps}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primaryDark"
              size="md"
              className="w-full group"
              icon={<Whatsapp fill="rgb(36 36 36)" />}
            >
              Order Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
