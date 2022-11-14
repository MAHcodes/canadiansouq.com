import React from "react";

interface Props {
  brand?: string;
  cost?: number;
  price?: number;
}

const Header = ({ brand, cost, price }: Props) => (
  <div className={`flex items-center justify-between`}>
    <div>
      <h2 className="text-base text-gray">{brand}</h2>
    </div>
    <div className="flex items-center flex-col">
      {price !== cost && (
        <h4 className="text-sm text-gray line-through">${cost}</h4>
      )}
      <h3 className="text-black font-bold">${price}</h3>
    </div>
  </div>
);

export default Header;
