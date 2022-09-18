import { IProduct } from "../types";

export interface ICartProps {
  cart?: {prod: IProduct, qty: number}[];
  router?: any;
}

const useCartProps = ({router, cart}: ICartProps) => {
  if (cart !== undefined) {
    return cart!.map( item => `${item.prod.id}x${item.qty}`).join("n");
  }
  if (router !== undefined) {
    const prods = router.split("n");
    const items = prods.map((prod: string) => ({ prod: prod.split("x")[0], qty:prod.split("x")[1] }));
    return items;
  }
  return undefined;
}

export default useCartProps;
