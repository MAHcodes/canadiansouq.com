import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";
import { Bookmark } from "../../components/icons";
import ImagesSlider from "../../components/ImagesSlider";
import { getProduct, getProductsIDs } from "../../graphql/queries/getProducts";
import { IProduct } from "../../types";

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  const router = useRouter();
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
            href={`https://wa.me/+96181921320/?text=${process.env.HOST || ""}${
              router.asPath
            }`}
            className="flex-1"
          >
            <Button text="Buy Now" main pad="py-3 px-5" className="w-full" />
          </a>
          <Button text={<Bookmark />} sec pad="p-3" />
          <Button text={<Bookmark />} sec pad="p-3" />
        </div>
        <div className="grid grid-cols-productInfo gap-x-6 gap-y-3">
          <Title text="Availability" />
          <h2
            className={`${
              product.attributes.availability! > 0
                ? "text-success"
                : "text-danger"
            } font-bold`}
          >
            {product.attributes.availability! > 0 ? "In Stock" : "Out of Stock"}
          </h2>

          <Title text="Brand" />
          <h2>{product.attributes.brand?.data.attributes.name}</h2>

          <Title text="Model" />
          <h2>{product.attributes.model}</h2>

          <Title text="Description" className="col-span-2" />
          <h2>{product.attributes.description}</h2>
        </div>
      </div>
    </div>
  );
};

const Title = ({ text, className }: { text: string, className?: string }) => (
  <h4 className={`text-gray font-bold text-base ${className}`}>{text}:</h4>
);

export const getStaticPaths = async () => {
  const products: IProduct[] = await getProductsIDs();
  const paths = products.map((product) => ({ params: { id: product.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: number };
}) => {
  const product = await getProduct(params.id);

  return {
    props: {
      product,
    },
  };
};

export default Product;
