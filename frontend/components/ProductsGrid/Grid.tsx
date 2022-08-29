import React from "react";
import { IProduct } from "../../types";
import Card from "../Card";

type Props = {
  grid: boolean;
  products: IProduct[];
};

const Grid = ({ grid, products }: Props) => {
  console.log(products)
  return (
    <div className={`grid gap-4 ${grid ? "1fr" : "grid-flow-col"}`}>
      {products.map((product) => (
        <Card grid={grid} key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Grid;
