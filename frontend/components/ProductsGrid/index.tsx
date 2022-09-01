import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../types";
import Grid from "./Grid";
import Navigation from "./Navigation";
import Pagination from "./Pagination";

type Props = {
  products: IProduct[];
  brands: string[];
};

const ProductsGrid = ({ products: prods, brands }: Props) => {
  const [products, setProducts] = useState(prods);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(JSON.parse(localStorage.getItem("grid") || "false"));
  }, []);

  const router = useRouter();
  const page = router.query.page;
  const limit = 15;
  const pagesCount = Math.ceil(products.length / limit) - 1;

  return (
    <div className="container">
      <Navigation
        grid={grid}
        setGrid={setGrid}
        router={router}
        brands={brands}
        setProducts={setProducts}
        prods={prods}
      />

      <Grid
        grid={grid}
        products={products.slice(+page! * limit, +page! * limit + limit)}
      />

      <Pagination router={router} page={+page!} pageCount={+pagesCount!} />
    </div>
  );
};

export default ProductsGrid;
