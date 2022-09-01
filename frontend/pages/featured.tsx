import ProductsGrid from "../components/ProductsGrid";
import { getFeaturedBrands } from "../graphql/queries/getBrands";
import { getFeaturedProducts } from "../graphql/queries/getProducts";
import { IProduct } from "../types";

interface Props {
  products: IProduct[];
  brands: string[];
}

const Featured = ({products, brands}: Props) => (
  <ProductsGrid products={products} brands={brands} />
)


export const getStaticProps = async () => {
  const products = await getFeaturedProducts({limit: -1});
  const featuredBrands = await getFeaturedBrands();
  const brands = featuredBrands.map((brand: {attributes: {name: string}}) => brand.attributes.name)

  return {
    props: {
      products,
      brands,
    },
  };
};

export default Featured
