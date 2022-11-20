import React from "react";

interface Props {
  cost?: number;
  price?: number;
}

const Pricing = ({ cost, price }: Props) => (
  <div className="flex items-center flex-col">
    {price !== cost && (
      <h4 className="text-sm text-gray line-through">${cost}</h4>
    )}
    <h3 className="text-black font-bold">${price}</h3>
  </div>
);

export default Pricing;
