import ProductsGrid from "../components/ProductsGrid";
import { getBrands } from "../graphql/queries/getBrands";
import { getNewArrivalProducts } from "../graphql/queries/getProducts";
import { IProduct } from "../types/IProduct";

interface Props {
  products: IProduct[];
  brands: string[];
}

const NewArrivals = ({products, brands}: Props) => (
  <ProductsGrid products={products} brands={brands} />
)


export const getStaticProps = async () => {
  const products = await getNewArrivalProducts({limit: -1});
  const newArrivalsProducts = await getBrands();
  const brands = newArrivalsProducts.map((brand: {attributes: {name: string}}) => brand.attributes.name)

  return {
    props: {
      products,
      brands,
    },
  };
};

export default NewArrivals;
