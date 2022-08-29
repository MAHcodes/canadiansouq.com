import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IProduct } from '../../types'
import Grid from './Grid'
import Navigation from './Navigation'

type Props = {
  products: IProduct[];
}

const ProductsGrid = ({products}: Props) => {
  const [grid, setGrid] = useState(false)
  const router = useRouter();

  return (
    <div className='container'>
      <Navigation grid={grid} setGrid={setGrid} router={router} />
      <Grid grid={grid} products={products} />
    </div>
  )
}

export default ProductsGrid;
