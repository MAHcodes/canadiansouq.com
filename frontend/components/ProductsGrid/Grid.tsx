import { IProduct } from "../../types/";
import Card from "../Card";

type Props = {
  grid: boolean;
  filteredProducts: IProduct[];
};

const Grid = ({ grid, filteredProducts }: Props) => {
  return (
    <div className={`grid gap-2 ${grid ? "1fr" : "grid-cols-productsGridM md:grid-cols-productsGridD"}`}>
      {filteredProducts.map((product) => (
        <Card grid={grid} key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Grid;
