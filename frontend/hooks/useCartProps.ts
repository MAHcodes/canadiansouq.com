import { IProduct } from "../types";

export interface ICartProps {
  cart?: { prod: IProduct, qty: number }[];
  params?: string;
}

const useCartProps = ({params, cart}: ICartProps) => {
  if (cart !== undefined) {
    return cart!.map( item => `${item.prod.id}x${item.qty}`).join("n");
  }
  if (params !== "" || params !== undefined) {
    const prods = params.split("n");
    const items = prods.map((prod: string) => ({ prod: prod.split("x")[0], qty:prod.split("x")[1] }));
    return items;
  }
  return undefined;
}

export default useCartProps;
