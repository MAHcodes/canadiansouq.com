import Link from "next/link";
import React from "react";
import { IProduct } from "../types";
import Card from "./Card";
import { Arrow } from "./icons";

type Props = {
  title: string;
  slug: string;
  products: IProduct[];
};

const ProductsSlider = ({ title, slug }: Props) => {
  const products: IProduct[] = [{
    id: 2,
    attributes: {
      name: '1/4" (6,4 mm) Titanium IR Drill bit',
      model: "DD5116",
      brand: "DeWALT",
      category: "Power Tools",
      price: 9,
      cost: 10,
      description:
        "With its unique Pilot Point Tip, the DEWALT IMPACT READY® Titanium Nitride Coated Drill Bits deliver speed and clear holes with minimal burr. The feature tip helps reduce bit walking and Titanium Nitride Coating delivers long life. The optimized flute helps deliver better control of the bit and patented web taper helps increase bit strength. Ideal for metal, wood, and plastic.",
      images: ["https://i.imgur.com/323Kbxi.jpg"],
      availability: 2,
    },
  }];

  return (
    <div className="container py-4">
      <div className="flex items-center justify-between mb-4">
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

      <div className="snap-proximity snap-x flex items-stretch gap-2 overflow-x-auto noscrollbar">
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
        <Card product={products[0]} />
      </div>
    </div>
  );
};

export default ProductsSlider;
