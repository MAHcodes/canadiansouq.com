import React from "react";
import { IProduct } from "../../types";
import CheckBox from "../CheckBox";

type Props = {
  brands: string[];
  products: IProduct[];
  setProducts: any;
};

const Filter = ({brands, products, setProducts }: Props) => {
  const handleFilterByBrand = (brand: string) => {
    const newProducts = products.filter(product => product.attributes.brand?.data.attributes.name === brand);
    setProducts(newProducts);
  }

  return (
    <div className="bg-fff rounded-md mb-4 p-4 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%] animate-slideDownIn origin-top-right">
      <h3 className="text-center font-bold">Filter</h3>
      brand:
      <ul>
        {brands.map(brand => <li key={brand}>
          <CheckBox text={brand} onChange={(text: string) => handleFilterByBrand(text)} />
        </li>)}
      </ul>
    </div>
  );
};

export default Filter;
