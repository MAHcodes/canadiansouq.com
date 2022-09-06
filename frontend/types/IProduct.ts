export interface IProduct {
  id?: number;
  attributes: {
    title?: string;
    featured?: boolean;
    condition?: string;
    availability?: number;
    model?: string;
    brand?: IBrand;
    category?: ICategory;
    price?: number;
    cost?: number;
    description?: string;
    images?: IImages;
  };
}

export interface IBrand {
  data: {
    id?: number;
    attributes: {
      name: string;
    };
  };
}

export interface ICategory {
  attributes: {
    title: string;
  };
}

export interface IImages {
  data: {
    attributes: {
      url: string;
    };
  }[];
}
