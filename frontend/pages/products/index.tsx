import React from "react";
import { getProducts } from "../../graphql/queries/getProducts";
import { IProduct } from "../../types";

type Props = {
  products: IProduct;
};

const Products = ({ products }: Props) => {
  console.log(products);
  return <div className="container">Products</div>;
};

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};

export default Products;
