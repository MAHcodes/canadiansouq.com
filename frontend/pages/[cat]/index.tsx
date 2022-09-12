import ProductsGrid from "../../components/ProductsGrid";
import { getCategoryBrands } from "../../graphql/queries/getBrands";
import { getCategories } from "../../graphql/queries/getCategories";
import { getCategoryProducts } from "../../graphql/queries/getProducts";
import { getCategoryTypes } from "../../graphql/queries/getTypes";
import { ICategory, IProduct } from "../../types/IProduct";

type Props = {
  products: IProduct[];
  brands: string[];
  types: string[];
};

const Products = ({ products, brands, types }: Props) => {
  return <ProductsGrid products={products} brands={brands} types={types} />;
};

export const getStaticProps = async ({params}: {params: { cat: string }}) => {
  const categroyProducts = await getCategoryProducts({ cat: params.cat });
  const categoryBrands = await getCategoryBrands(params.cat);
  const categoryTypes = await getCategoryTypes(params.cat);

  const [products] = categroyProducts.map(
    (category: { attributes: { products: { data: IProduct[] } } }) =>
      category.attributes.products.data
  );

  const brands = categoryBrands.map((category: {attributes: {name: string}}) => (category.attributes.name)).filter((brand: string | null) => brand !== null);
  const types = Array.from( new Set(categoryTypes.map((category: {attributes: {type: string}}) => (category.attributes.type)).filter((type: string | null) => type !== null)));

  return {
    props: {
      products,
      brands,
      types,
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
