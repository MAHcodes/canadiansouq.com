import React from "react";
import { IProduct } from "../../types";
import Card from "../Card";

type Props = {
  grid: boolean;
  products: IProduct[];
};

const Grid = ({ grid, products }: Props) => {
  return (
    <div className={`grid ${grid ? "grid-flow-col" : "1fr"}`}>
      {products.map((product) => (
        <Card grid={grid} key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Grid;
