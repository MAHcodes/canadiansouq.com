import { useSelector } from 'react-redux';
import ProductsGrid from '../components/ProductsGrid';
import { RootState } from '../redux/store';
import { IProduct } from '../types/'

interface Props {
  products: IProduct[];
}

const Wishlist: React.FunctionComponent<Props> = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const brands  = Array.from( new Set(wishlist.map((item: IProduct) => item.attributes.brand?.data.attributes.name!)));
  const types  = Array.from( new Set(wishlist.map((item: IProduct) => item.attributes.type!)));

  return (
    <div className='container my-4'>
      <ProductsGrid products={wishlist} brands={brands} types={types} title="My WishList" />
    </div>
  )
}

export default Wishlist;
