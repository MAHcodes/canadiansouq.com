import Link from "next/link";
import React from "react";
import { IProduct } from "../types";
import { Arrow } from "./icons";

type Props = {
  title: string;
  slug: string;
  products: IProduct[];
};

const ProductsSlider = ({ title, slug, products }: Props) => {
  console.log(products);
  return (
    <div className="container py-4 ">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">{title}</h2>
        <Link href={`/products/${slug}`} passHref>
          <span className="flex items-center gap-1 group hover:underline active:underline opacity-80 hover:opacity-100 focus:underline cursor-pointer">
            Explore all
            <span className="rotate-[-90deg]">
              <Arrow className=" group-hover:translate-x-2 group-hover:animate-bounce group-active:animate-bounce group-focus:aninimate-bounce" />
            </span>
          </span>
        </Link>
      </div>
      <div>{products[0].attributes.availability}</div>
    </div>
  );
};

export default ProductsSlider;
