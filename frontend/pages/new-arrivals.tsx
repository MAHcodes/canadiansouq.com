import ProductsGrid from "../components/ProductsGrid";
import { getBrands } from "../graphql/queries/getBrands";
import { getNewArrivalProducts } from "../graphql/queries/getProducts";
import { getTypes } from "../graphql/queries/getTypes";
import { IProduct } from "../types/IProduct";

interface Props {
  products: IProduct[];
  brands: string[];
  types: string[];
}

const NewArrivals = ({products, brands, types}: Props) => (
  <ProductsGrid products={products} brands={brands} types={types} />
)


export const getStaticProps = async () => {
  const products = await getNewArrivalProducts({limit: -1});
  const newArrivalsBrands = await getBrands();
  const newArrivalsTypes = await getTypes();

  const brands = newArrivalsBrands.map((brand: {attributes: {name: string}}) => brand.attributes.name)
  const types = Array.from( new Set(newArrivalsTypes.map((type: {attributes: {type: string}}) => type.attributes.type).filter((type: string | null ) => type !== null)));

  return {
    props: {
      products,
      brands,
      types,
    },
  };
};

export default NewArrivals;
