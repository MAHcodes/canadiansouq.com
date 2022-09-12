import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { IProduct } from "../../types/IProduct";
import Grid from "./Grid";
import Navigation from "./Navigation";
import Pagination from "./Pagination";

type Props = {
  products: IProduct[];
  brands: string[];
  types: string[];
};

const reducer = (state: any, action: { type: any; value: string; }) => {
  switch (action.type) {
    case "by-brands":
      return {
        ...state,
        brands: state.brands.includes(action.value)
          ? state.brands.filter((brand: string) => brand !== action.value)
          : [...state.brands, action.value],
      };
    case "by-types":
      return {
        ...state,
        types: state.types.includes(action.value)
          ? state.types.filter((type: string) => type !== action.value)
          : [...state.types, action.value],
      };
    case "by-availability":
      return {
        ...state,
        availability: state.availability.includes(action.value)
          ? state.availability.filter((item: string) => item !== action.value)
          : [...state.availability, action.value],
      };
  }
};

const ProductsGrid = ({ products: allProducts, brands, types }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const initialFilter = { brands: [], types: [], availability: [] };
  const [filter, dispatch] = useReducer(reducer, initialFilter);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    setGrid(JSON.parse(localStorage.getItem("grid") || "false"));
  }, []);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  const router = useRouter();
  const { page } = router.query;
  const limit = grid ? 8 : 14;
  const pagesCount = Math.ceil(filteredProducts.length / limit) - 1;

  useEffect(() => {
    const newFilteredProducts = allProducts.filter((product) => {
      const prodBrand =  product.attributes?.brand?.data?.attributes?.name;
      const prodType = product.attributes.type;
      const prodAvailable = product.attributes.availability! <= 0 ? "Out of Stock" : "In Stock";
      return (
        ( filter.brands.length > 0 ? (filter.brands.some((item: string) => prodBrand === item)): true) &&
        ( filter.types.length > 0 ? (filter.types.some((type: string) => prodType === type)) : true) &&
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
        types={types}
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
