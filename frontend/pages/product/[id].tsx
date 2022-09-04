import { useRouter } from "next/router";
import { getProductsIDs } from "../../graphql/queries/getProducts";
import { IProduct } from "../../types/IProduct";
import ProductInfo from "../../components/Product";
import { getProduct } from "../../graphql/queries/getProduct";

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  const router = useRouter();
  return <ProductInfo product={product} asPath={router.asPath}  />
};

export const getStaticPaths = async () => {
  const products: IProduct[] = await getProductsIDs();
  const paths = products.map((product) => ({ params: { id: product.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const product = await getProduct(params.id);

  return {
    props: {
      product,
    },
  };
};

export default Product;
