import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { IProduct } from "../../types/";
import Buttons from "./Buttons";
import Grid from "./Grid";
import Navigation from "../Navigation";
import Pagination from "./Pagination";
import FilterOptions from "./Filter";

type Props = {
  products: IProduct[];
  brands: string[];
  types: string[];
  title: string;
};

const reducer = (state: any, action: { type: any; value: string }) => {
  switch (action.type) {
    case "search":
      return {
        ...state,
        search: action.value,
      };
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

const ProductsGrid = ({
  products: allProducts,
  brands,
  types,
  title,
}: Props) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const initialFilter = { brands: [], types: [], availability: [], search: "" };
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
      const prodBrand = product.attributes?.brand?.data?.attributes?.name;
      const prodType = product.attributes.type;
      const prodTitle = product.attributes.title?.toLowerCase();
      const prodModel = product.attributes.model?.toLowerCase();
      const prodAvailable =
        product.attributes.availability! <= 0 ? "Out of Stock" : "In Stock";
      return (
        (filter.brands.length > 0
          ? filter.brands.some((item: string) => prodBrand === item)
          : true) &&
        (filter.types.length > 0
          ? filter.types.some((type: string) => prodType === type)
          : true) &&
        (filter.availability.length > 0
          ? filter.availability.some((item: string) => prodAvailable === item)
          : true) &&
        (filter.search.length > 0
          ? prodTitle?.includes(filter.search.trim().toLowerCase()) ||
            prodModel?.includes(filter.search.trim().toLowerCase())
          : true)
      );
    });
    setFilteredProducts(newFilteredProducts);
  }, [filter, allProducts]);

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Head>
        <title>Canadian Souq | {title || router.query.cat}</title>
      </Head>
      <div className="container">
        <Navigation title={title || router.query.cat!.toString()}>
          <Buttons
            grid={grid}
            setGrid={setGrid}
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
          />
        </Navigation>

        {openFilter && (
          <FilterOptions
            brands={brands}
            types={types}
            filter={filter}
            dispatch={dispatch}
          />
        )}

        <Grid
          grid={grid}
          filteredProducts={filteredProducts.slice(
            +page! * limit,
            +page! * limit + limit
          )}
        />

        <Pagination router={router} page={+page!} pageCount={+pagesCount!} />
      </div>
    </>
  );
};

export default ProductsGrid;
