import Markdown from "marked-react";
import { useDispatch, useSelector } from "react-redux";
import { add as addToCart, remove as removeFromCart } from "../redux/cartSlice";
import { add as addToWishlist, remove as removeFromWishlist } from "../redux/wishlistStore";
import { RootState } from "../redux/store";
import { IProduct } from "../types/IProduct";
import Button from "./Button";
import { AddedtoCart, AddtoCart, Bookmark } from "./icons";
import ImagesSlider from "./ImagesSlider";

interface Props {
  product: IProduct;
  asPath: string;
}

const Product = ({ product, asPath }: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container grid lg:grid-cols-productSliderAndInfo gap-6 overflow-x-hidden">
      <ImagesSlider
        images={product.attributes.images!}
        alt={product.attributes.title!}
      />
      <div className="flex-1 w-full mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{product.attributes.title}</h1>
          <div className="items-center">
            <p className="text-base line-through text-gray">
              ${product.attributes.cost}
            </p>
            <h3 className="text-lg font-bold">${product.attributes.price}</h3>
          </div>
        </div>
        <div className="flex items-stretch gap-2 my-4">
          <a
            href={`https://wa.me/+96181921320/?text=${
              process.env.HOST || ""
            }${asPath}`}
            className="flex-1"
          >
            <Button size="lg" className="w-full">
              Buy Now
            </Button>
          </a>
          {cart.some((item) => item.id === product.id) ? (
            <Button
              color="secondary"
              size="lg"
              onClick={() => dispatch(removeFromCart(product.id))}
              icon={<AddedtoCart />}
            />
          ) : (
            <Button
              color="secondary"
              size="lg"
              onClick={() => dispatch(addToCart(product.id))}
              icon={<AddtoCart />}
            />
          )}
          {wishlist.some((item) => item === product.id) ? (
            <Button
              color="secondary"
              size="lg"
              onClick={() => dispatch(removeFromWishlist(product.id))}
              icon={<Bookmark clr="fill-black" />}
            />
          ) : (
            <Button
              color="secondary"
              size="lg"
              onClick={() => dispatch(addToWishlist(product.id))}
              icon={<Bookmark />}
            />
          )}
        </div>
        <div className="grid grid-cols-productInfo gap-x-6 gap-y-4">
          <Info
            title="Availability"
            text={
              product.attributes.availability! > 0 ? "In Stock" : "Out of Stock"
            }
            className={`${
              product.attributes.availability! > 0
                ? "text-success"
                : "text-danger"
            } font-bold`}
          />
          <Info
            title="Brand"
            text={product.attributes.brand?.data.attributes.name!}
          />
          <Info title="Model" text={product.attributes.model!} />
          <Info title="Condition" text={product.attributes.condition!} />
          <Info title="Description" className="col-span-2">
            <div className="col-span-2">
              <Markdown>{product.attributes.description!}</Markdown>
            </div>
          </Info>
        </div>
      </div>
    </div>
  );
};

interface InfoProps {
  title: string;
  text?: string;
  className?: string;
  children?: JSX.Element;
}

const Info = ({ title, text, className, children }: InfoProps) => (
  <>
    <h4 className="text-gray font-bold text-base">{title}:</h4>
    {text && <h2 className={`${className} text-lg`}>{text}</h2>}
    {children}
  </>
);

export default Product;
