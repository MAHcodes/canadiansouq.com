import ProductsGrid from "../components/ProductsGrid";
import { getFeaturedBrands } from "../graphql/queries/getBrands";
import { getFeaturedProducts } from "../graphql/queries/getProducts";
import { getFeaturedTypes } from "../graphql/queries/getTypes";
import { IProduct } from "../types/";

interface Props {
  products: IProduct[];
  brands: string[];
  types: string[];
}

const Featured = ({ products, brands, types }: Props) => (
  <ProductsGrid
    products={products}
    brands={brands}
    types={types}
    title="Featured Products"
  />
);

export const getStaticProps = async () => {
  const products = await getFeaturedProducts({ limit: -1 });
  const featuredBrands = await getFeaturedBrands();
  const featuredTypes = await getFeaturedTypes();

  const brands = featuredBrands.map(
    (brand: { attributes: { name: string } }) => brand.attributes.name
  );
  const types = Array.from(
    new Set(
      featuredTypes
        .map((type: { attributes: { type: string } }) => type.attributes.type)
        .filter((type: string | null) => type !== null)
    )
  );

  return {
    props: {
      products,
      brands,
      types,
    },
  };
};

export default Featured;
