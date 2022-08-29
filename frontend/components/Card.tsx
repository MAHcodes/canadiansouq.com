import Markdown from "marked-react";
import Link from "next/link";
import React from "react";
import { IProduct } from "../types";
import Button from "./Button";
import { Bookmark } from "./icons";

interface Props {
  grid?: boolean;
  product: IProduct;
}

const Card = ({ grid, product }: Props) => (
  <div
    className={`bg-fff p-4 rounded-lg transition-shadow flex gap-4 shadow-black hover:shadow-xl items-stretch snap-center group overflow-x-clip
        ${grid ? "flex-row w-full" : "flex-col max-w-[14rem]"}
      `}
  >
    <Link href={`/product/${product.id}`}>
      <div
        className={`flex items-center justify-center cursor-pointer overflow-hidden rounded-lg ${
          grid ? "basis-2/6 min-w-[7rem] max-w-[16rem]" : "my-2"
        }`}
      >
        <img
          className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform"
          src={"/images" + product.attributes.images?.data[0].attributes.url}
          alt={product.attributes.title}
        />
      </div>
    </Link>

    <div className="flex flex-col justify-between flex-1">
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col cursor-pointer">
          <div
            className={`flex items-center justify-between`}
          >
            <div>
              <h2 className="text-base text-gray">
                {product.attributes.brand?.data.attributes.name}
              </h2>
            </div>
            <div className="flex items-center flex-col">
              {product.attributes.price !== product.attributes.cost && (
                <h4 className="text-sm text-gray line-through">
                  ${product.attributes.cost}
                </h4>
              )}
              <h3 className="text-black font-bold">
                ${product.attributes.price}
              </h3>
            </div>
          </div>

          <div className="flex-1">
            <h2
              className={`text-lg my-2 two-lines hover:underline ${
                grid && "font-semibold"
              }`}
            >
              {product.attributes.title}
            </h2>
            {grid && (
              <div className="text-gray text-base twolines">
                <Markdown>{product.attributes.description}</Markdown>
              </div>
            )}
          </div>
        </div>
      </Link>

      <div className="flex items-stretch justify-end gap-2 mt-2">
        <Button
          text="Add to Cart"
          pad={`p-2 ${grid ? "px-6" : "flex-1"}`}
          main
        />
        <Button text={<Bookmark />} sec pad="p-2" font="font-base" />
      </div>
    </div>
  </div>
);

export default Card;
