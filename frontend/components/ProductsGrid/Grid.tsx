import { IProduct } from "../../types";
import Card from "../Card";

type Props = {
  grid: boolean;
  products: IProduct[];
};

const Grid = ({ grid, products }: Props) => {
  return (
    <div className={`grid gap-2 ${grid ? "1fr" : "grid-cols-productsGridM md:grid-cols-productsGridD"}`}>
      {products.map((product) => (
        <Card grid={grid} key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Grid;
