import React from "react";
import ProductsGrid from "../../components/ProductsGrid";
import { getCategoryBrands } from "../../graphql/queries/getBrands";
import { getCategories } from "../../graphql/queries/getCategories";
import { getCategoryProducts } from "../../graphql/queries/getProducts";
import { ICategory, IProduct } from "../../types";

type Props = {
  products: IProduct[];
  brands: string[];
};

const Products = ({ products, brands }: Props) => {
  return <ProductsGrid products={products} brands={brands} />;
};

export const getStaticProps = async ({params}: {params: { cat: string }}) => {
  const categroyProducts = await getCategoryProducts({ cat: params.cat });
  const categoryBrands = await getCategoryBrands(params.cat);

  const [products] = categroyProducts.map(
    (category: { attributes: { products: { data: IProduct[] } } }) =>
      category.attributes.products.data
  );

  const brands = categoryBrands.map((category: {attributes: {name: string}}) => (category.attributes.name))

  return {
    props: {
      products,
      brands,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category: ICategory) => ({
    params: { cat: category.attributes.title },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Products;
