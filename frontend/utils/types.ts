export interface IProduct {
  id?: number;
  attributes: {
    name?: string;
    featured?: boolean;
    availability?: number;
  };
}
