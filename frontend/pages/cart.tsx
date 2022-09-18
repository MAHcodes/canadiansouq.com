import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { getProducts } from '../graphql/queries/getProducts'
import useCartProps from '../hooks/useCartProps';
import { IProduct } from '../types'

interface Props {
  prods: IProduct[];
}

const Cart = ({prods: prods}: Props) => {
  const router = useRouter();
  const [pageProps, setPageProps] = useState("");

  useEffect(() => {
    if(!router.isReady) return;
    setPageProps(router.query.cart!.toString())
  }, [router.isReady])

  const props = useCartProps({ router: pageProps });
  /* const products = useMemo(() =>  prods.filter(product => items.some((item: number) => item === product.id)), [prods]); */
  console.log(props)


  return (
    <div>Cart</div>
  )
}

export const getStaticProps = async () => {
  const prods = await getProducts();
  
  return {
    props: {
      prods,
    }
  }
}

export default Cart
