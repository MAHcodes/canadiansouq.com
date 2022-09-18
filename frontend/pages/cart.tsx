import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import { getProducts } from "../graphql/queries/getProducts";
import { IProduct } from "../types";

interface Props {
  prods: IProduct[];
}

const Cart = ({ prods: prods }: Props) => {
  const router = useRouter();
  const [pageParams, setPageParams] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    setPageParams(router.query.cart!.toString());
  }, [router.isReady]);

  const cartItems = pageParams.split("n").map((prod: string) => ({ prod: prod.split("x")[0], qty:prod.split("x")[1] }));

  const products = useMemo(
    () =>
      prods.filter((product) =>
        cartItems.some((item: { prod: string }) => item.prod === product.id?.toString())
      ),
    [prods, cartItems]
  );

  console.log(products);
  return (
    <div className="container my-4">
      <Navigation title="Cart">
        <span />
      </Navigation>
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <Card key={product.id} grid product={product} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const prods = await getProducts();

  return {
    props: {
      prods,
    },
  };
};

export default Cart;
