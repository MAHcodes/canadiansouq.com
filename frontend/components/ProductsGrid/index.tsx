import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { IProduct } from "../../types/IProduct";
import Grid from "./Grid";
import Navigation from "./Navigation";
import Pagination from "./Pagination";

type Props = {
  products: IProduct[];
  brands: string[];
};

const reducer = (state: any, action: any) => {
  // TODO fix typescript types
  switch (action.type) {
    case "by-brands":
      return {
        ...state,
        brands: state.brands.includes(action.value)
          ? state.brands.filter((brand: string) => brand !== action.value)
          : [...state.brands, action.value],
      };
    case "by-availability":
      return {
        ...state,
        availability: state.availability.includes(action.value)
          ? state.availability.filter((item: string) => item !== action.value)
          : [...state.availability, action.value],
      };
    case "reset":
      return action.value;
  }
};

const ProductsGrid = ({ products: allProducts, brands }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const initialFilter = { brands: [], availability: [] };
  const [filter, dispatch] = useReducer(reducer, initialFilter);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(JSON.parse(localStorage.getItem("grid") || "false"));
  }, []);

  useEffect(() => {
    setFilteredProducts(allProducts);
    dispatch({ type: "reset", value: initialFilter });
  }, [allProducts]);

  const router = useRouter();
  const page = router.query.page;
  const limit = 15;
  const pagesCount = Math.ceil(filteredProducts.length / limit) - 1;

  useEffect(() => {
    const newFilteredProducts = allProducts.filter((product) => {
      const prodBrand = product.attributes.brand?.data.attributes.name;
      const prodAvailable = product.attributes.availability! <= 0 ? "Out of Stock" : "In Stock";
      return (
        ( filter.brands.length > 0 ? (filter.brands.some((item: string) => prodBrand === item)): true) &&
        ( filter.availability.length > 0 ? (filter.availability.some((item: string) => prodAvailable === item)) : true)
      );
    });
    setFilteredProducts(newFilteredProducts);
  }, [filter]);

  return (
    <div className="container">
      <Navigation
        grid={grid}
        setGrid={setGrid}
        router={router}
        brands={brands}
        filter={filter}
        dispatch={dispatch}
      />

      <Grid
        grid={grid}
        filteredProducts={filteredProducts.slice(
          +page! * limit,
          +page! * limit + limit
        )}
      />

      <Pagination router={router} page={+page!} pageCount={+pagesCount!} />
    </div>
  );
};

export default ProductsGrid;
