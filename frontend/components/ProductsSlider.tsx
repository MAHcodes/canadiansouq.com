import Link from "next/link";
import React, { useState } from "react";
import { IProduct } from "../types";
import Card from "./Card";
import { Arrow } from "./icons";
import styles from "../styles/ProductsSlider.module.css"

type Props = {
  title: string;
  slug: string;
  products: IProduct[];
};

const ProductsSlider = ({ title, slug, products }: Props) => {
  const [scroll, setScroll] = useState("start");

  const handleScroll = (e: any) => {
    console.log(e.target.scrollLeft)
    if (e.target.scrollLeft <= 10) {
      setScroll("start");
    } else if (e.target.scrollLeft >= e.target.scrollLeftMax - 10) {
      setScroll("end");
    } else {
      setScroll("");
    }
  };

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

      <div className={`${styles.scroll} ${scroll && styles[scroll]}`}>
        <div onScroll={(e) => handleScroll(e)} className="snap-proximity snap-x flex items-stretch gap-2 overflow-x-auto noscrollbar">
          {products.map(prod => (
            <Card key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
