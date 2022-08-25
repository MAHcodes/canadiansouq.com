export interface IProduct {
  id?: number;
  attributes: {
    name?: string;
    featured?: boolean;
    availability?: number;
    model?: string;
    brand?: string;
    category?: string;
    price?: number,
    cost?: number,
    description?: string,
    images?: string[],
  };
}
