import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import ProductsGrid from '../components/ProductsGrid';
import { getProducts } from '../graphql/queries/getProducts'
import { RootState } from '../redux/store';
import { IProduct } from '../types/IProduct'

interface Props {
  products: IProduct[];
}

const Wishlist: React.FunctionComponent<Props> = ({products: prods}) => {
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const products = useMemo(() =>  prods.filter(product => wishlist.some((item: number) => item === product.id)), [prods]);
  const brands = useMemo(() => Array.from(new Set(products.map(product => product.attributes?.brand?.data?.attributes?.name!).filter((brand: string | null) => brand != undefined))), [products]);
  const types = useMemo(() => Array.from(new Set(products.map(product => product.attributes?.type!).filter((type: string | null) => type !== null))), [products]);

  return (
    <div className='container my-4'>
      <ProductsGrid products={[...products]} brands={brands} types={types} />
    </div>
  )
}

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    }
  }
}

export default Wishlist;
