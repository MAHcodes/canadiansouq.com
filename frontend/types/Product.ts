import { IBrand, ICategory, IImages } from "./index";

export interface IProduct {
  id?: number;
  attributes: {
    title?: string;
    featured?: boolean;
    condition?: string;
    availability?: number;
    type?: string;
    model?: string;
    brand?: IBrand;
    category?: ICategory;
    price?: number;
    cost?: number;
    description?: string;
    images?: IImages;
  };
}
