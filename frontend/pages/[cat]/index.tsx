import React from "react";
import ProductsGrid from "../../components/ProductsGrid";
import { getCategories } from "../../graphql/queries/getCategories";
import { getCategoryProducts } from "../../graphql/queries/getProducts";
import { ICategory, IProduct } from "../../types";

type Props = {
  products: IProduct;
};

const Products = ({ products }: Props) => {
  return <ProductsGrid products={products} />;
};

export const getStaticProps = async ({params}: {params: {cat: string}}) => {
  const products = await getCategoryProducts({cat: params.cat});

  return {
    props: {
      products,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category: ICategory ) => ({params: {cat: category.attributes.title}}))

  return {
    paths,
    fallback: false,
  }
}

export default Products;
