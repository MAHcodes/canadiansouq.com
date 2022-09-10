import { useState } from "react";
import { IProduct } from "../types/IProduct";

interface Props {
  products: IProduct[];
}

const useFilter = ({products}: Props) => {
  const [brandFilter, setBrandFilter] = useState([]);

  const filteredProducts = products.filter(product => {
    const prodBrand = product.attributes.brand?.data.attributes.name;
    return brandFilter.some(brand => brand === prodBrand);
  });

  return { brandFilter, setBrandFilter, filteredProducts }
}

export default useFilter;
