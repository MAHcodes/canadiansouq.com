import React from 'react'
import { IProduct } from "../types";

type Props = {
  title: string;
  slug: string;
  products: IProduct[];
}

const ProductsSlider = ({title}: Props) => {
  return (
    <div className="container">
    <div>{title}</div>
</div>
  )
}

export default ProductsSlider
