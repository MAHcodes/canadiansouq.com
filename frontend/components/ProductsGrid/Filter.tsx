import React from "react";
import CheckBox from "../CheckBox";

type Props = {
  brands: string[];
};

const Filter = ({brands}: Props) => {
  return (
    <div className="bg-fff rounded-md mb-4 p-4 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%] animate-slideDownIn origin-top-right">
      <h3 className="text-center font-bold">Filter</h3>
      brand:
      <ul>
        <li>
          <CheckBox />
        </li>
        {brands.map(brand => <li key={brand}>{brand}</li>)}
      </ul>
    </div>
  );
};

export default Filter;
