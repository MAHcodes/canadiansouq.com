import Link from "next/link";
import React from "react";
import { IProduct } from "../types";
import { Arrow } from "./icons";

type Props = {
  title: string;
  products: IProduct[];
};

const ProductsSlider = ({ title }: Props) => {
  return (
    <div className="container py-4 ">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">{title}</h2>
        <Link href="/products/featured" passHref>
          <span className="flex items-center gap-1 group hover:underline active:underline opacity-80 hover:opacity-100 focus:underline cursor-pointer">
            Explore all
            <Arrow className="rotate-[-90deg] group-hover:translate-x-2" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductsSlider;
