export interface IProduct {
  id?: number;
  attributes: {
    title?: string;
    featured?: boolean;
    availability?: number;
    model?: string;
    brand?: IBrand;
    categories?: ICategory;
    price?: number;
    cost?: number;
    description?: string;
    images?: IImages;
  };
}

export interface IBrand {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  };
}

export interface ICategory {
  data: {
    attributes: {
      title: string;
    };
  }[];
}

export interface IImages {
  data: {
    attributes: {
      url: string;
    };
  }[];
}
