import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IProduct } from '../../types'
import Grid from './Grid'
import Navigation from './Navigation'

type Props = {
  products: IProduct[];
  brands: string[];
}

const ProductsGrid = ({products: prods, brands}: Props) => {
  const [grid, setGrid] = useState(false)
  const [products, setProducts] = useState(prods);
  const router = useRouter();

  return (
    <div className='container'>
      <Navigation grid={grid} setGrid={setGrid} router={router} brands={brands} setProducts={setProducts} prods={prods} />
      <Grid grid={grid} products={products} />
    </div>
  )
}

export default ProductsGrid;
