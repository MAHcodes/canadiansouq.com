import React from 'react'
import { IProduct } from '../types'
import Button from './Button'
import { AddtoCart, Bookmark } from './icons'
import ImagesSlider from './ImagesSlider'

interface Props {
  product: IProduct;
  asPath: string;
}

const Product = ({product, asPath}: Props) => {
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
              asPath
            }`}
            className="flex-1"
          >
            <Button text="Buy Now" main pad="py-3 px-5" className="w-full" />
          </a>
          <Button text={<AddtoCart />} sec pad="p-3" />
          <Button text={<Bookmark />} sec pad="p-3" />
        </div>
        <div className="grid grid-cols-productInfo gap-x-6 gap-y-3">
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
          <Info
            title="Description"
            text={product.attributes.description!}
            className="col-span-2"
          />
        </div>
      </div>
    </div>
  )
}

interface InfoProps {
  title: string;
  text: string;
  className?: string;
}

const Info = ({ title, text, className }: InfoProps) => (
  <>
    <h4 className="text-gray font-bold text-base">{title}:</h4>
    <h2 className={`${className} text-lg`}>{text}</h2>
  </>
);

export default Product;
