import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import EmptyCart from "../components/EmptyCart";
import { getProducts } from "../graphql/queries/getProducts";
import { RootState } from "../redux/store";
import { IProduct } from "../types/";

interface Props {
  products: IProduct[];
}

const Cart = ({ products: prods }: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  if (cart.length < 1) return <EmptyCart />;

  const products = useMemo(() => prods.filter((product) => cart.some((item: { id: number }) => item.id === product.id)), [prods]);

  return (
    <div className="container my-4">
      <div className="text-center mb-2 font-bold">Navigation</div>
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <Card grid product={product} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default Cart;
