import { IProduct } from "../../types/";
import Thumbnail from "./Thumbnail";
import Header from "./Header";
import Info from "./Info";
import Buttons from "./Buttons";
import CartButtons from "./CartButtons";
import Link from "next/link";

interface Props {
  grid?: boolean;
  product: IProduct;
  cart?: boolean;
}

const Card = ({ grid, product, cart }: Props) => (
  <div
    className={`card bg-fff rounded-lg transition-shadow flex gap-4 shadow-black hover:shadow-xl items-stretch snap-center overflow-x-clip p-4 group basis-56
        ${grid
        ? "flex-row w-full"
        : "flex-col min-w-[50%] sm:min-w-[40%] md:min-w-[30%] lg:min-w-[20%]"
      }
      `}
  >
    <Thumbnail
      id={product.id}
      grid={grid}
      src={product.attributes.images?.data[0].attributes.url}
      alt={product.attributes.title}
    />

    <div className="flex flex-col justify-between flex-1">
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col cursor-pointer">
          <Header
            brand={product.attributes.brand?.data?.attributes?.name}
            cost={product.attributes.cost}
            price={product.attributes.price}
          />
        </div>
      </Link>

      <div className="flex flex-col justify-between flex-1">
        <Info
          id={product.id}
          title={product.attributes.title}
          grid={grid}
          description={product.attributes.description}
        />

        {cart ? (
          <CartButtons product={product} grid={grid} />
        ) : (
          <Buttons grid={grid} product={product} />
        )}
      </div>
    </div>
  </div>
);

export default Card;
