import Markdown from "marked-react";
import Link from "next/link";
import { IProduct } from "../types/IProduct";
import Button from "./Button";
import { Bookmark } from "./icons";

interface Props {
  grid?: boolean;
  product: IProduct;
}

const Card = ({ grid, product }: Props) => (
  <div
    className={`card bg-fff rounded-lg transition-shadow flex gap-4 shadow-black hover:shadow-xl items-stretch snap-center overflow-x-clip p-4 group basis-56
        ${
          grid
            ? "flex-row w-full"
            : "flex-col min-w-[50%] sm:min-w-[40%] md:min-w-[30%] lg:min-w-[20%] max-w-xs"
        }
      `}
  >
    <Link href={`/product/${product.id}`}>
      <div
        className={`flex items-center justify-center cursor-pointer overflow-hidden rounded-lg ${
          grid && "basis-48 min-w-[6rem] max-w-[16rem]"
        }`}
      >
        <img
          className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform"
          src={"/images" + product.attributes.images?.data[0].attributes.url}
          alt={product.attributes.title}
          loading="lazy"
        />
      </div>
    </Link>

    <div className="flex flex-col justify-between flex-1">
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col cursor-pointer flex-1">
          <div className={`flex items-center justify-between`}>
            <div>
              <h2 className="text-base text-gray">
                {product.attributes.brand?.data?.attributes?.name}
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
              className={`text-lg my-2 two-lines group-hover:underline ${
                grid && "font-semibold"
              }`}
            >
              {product.attributes.title}
            </h2>
            {grid && (
              <div className="text-gray text-base twolines pointer-events-none">
                <Markdown>{product.attributes.description}</Markdown>
              </div>
            )}
          </div>
        </div>
      </Link>

      <div className="flex items-stretch justify-end gap-2 mt-2">
        <Button size="md" className="flex-1">Add to Cart</Button>
        <Button color="secondary" size="md" icon={<Bookmark />} />
      </div>
    </div>
  </div>
);

export default Card;
