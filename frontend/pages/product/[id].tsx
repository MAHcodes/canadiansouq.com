import React from 'react'
import { getProduct, getProductsIDs } from '../../graphql/queries/getProducts'
import { IProduct } from '../../types'

interface Props {
  product: IProduct;
}

const Product = ({product}: Props) => {
  return (
    <div className='container'>{product.attributes.title}</div>
  )
}

export const getStaticPaths = async () => {
  const products: IProduct[] =  await getProductsIDs();
  const paths = products.map((product) => ({ params: {id: product.id} }));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({params}: { params: {id: number}}) => {
  const product = await getProduct(params.id);

  return {
    props: {
      product,
    }
  }
}

export default Product
