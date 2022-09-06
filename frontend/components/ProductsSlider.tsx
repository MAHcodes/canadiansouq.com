import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { IProduct } from "../types/IProduct";
import Card from "./Card";
import { Arrow } from "./icons";
import styles from "../styles/ProductsSlider.module.css"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  title: string;
  slug: string;
  products: IProduct[];
};

const ProductsSlider = ({ title, slug, products, className, ...props }: Props) => {
  const [scroll, setScroll] = useState("start");

  const handleScroll = (e: any) => {
    const leftMax = e.target.scrollWidth - e.target.clientWidth;
    if (e.target.scrollLeft === leftMax) {
      setScroll("middle")
    } else if (e.target.scrollLeft <= 20) {
      setScroll("start");
    } else if (e.target.scrollLeft >= leftMax - 20) {
      setScroll("end");
    } else {
      setScroll("");
    }
  };

  return (
    <div className={`py-4 ${className}`} {...props}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-xl">{title}</h2>
        <Link href={`/${slug}?page=0`} passHref>
          <span className="flex items-center gap-1 group hover:underline active:underline opacity-80 hover:opacity-100 focus:underline cursor-pointer">
            Explore all
            <span className="rotate-[-90deg]">
              <Arrow className=" group-hover:translate-x-2 group-hover:animate-bounce group-active:animate-bounce group-focus:aninimate-bounce" />
            </span>
          </span>
        </Link>
      </div>

      <div className={`${styles.scroll} ${scroll && styles[scroll]}`}>
        <div onScroll={(e) => handleScroll(e)} className="snap-proximity snap-x flex items-stretch gap-2 overflow-x-auto noscrollbar [&>.card]:max-w-[14rem]">
          {products.map(prod => (
            <Card key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
