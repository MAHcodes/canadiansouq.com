import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";
import Grid from "./Grid";
import Navigation from "./Navigation";
import Pagination from "./Pagination";

type Props = {
  products: IProduct[];
  brands: string[];
};

const ProductsGrid = ({ products: allProducts, brands }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(JSON.parse(localStorage.getItem("grid") || "false"));
  }, []);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts])

  const router = useRouter();
  const page = router.query.page;
  const limit = 15;
  const pagesCount = Math.ceil(filteredProducts.length / limit) - 1;

  return (
    <div className="container">
      <Navigation
        grid={grid}
        setGrid={setGrid}
        router={router}
        brands={brands}
        setFilteredProducts={setFilteredProducts}
        allProducts={allProducts}
      />

      <Grid
        grid={grid}
        filteredProducts={filteredProducts.slice(+page! * limit, +page! * limit + limit)}
      />

      <Pagination router={router} page={+page!} pageCount={+pagesCount!} />
    </div>
  );
};

export default ProductsGrid;
