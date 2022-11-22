import { gql, request } from "graphql-request";
const graphqlAPI = process.env.GRAPHQL_ENDPOINT!;

export const getCategoryProducts = async (cat: { cat: string }) => {
  const PRODUCTS = gql`
    query getCategoryProducts($cat: String!) {
      categories(filters: { title: { eq: $cat } }) {
        data {
          attributes {
            title
            products {
              data {
                id
                attributes {
                  title
                  availability
                  model
                  type
                  brand {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  price
                  cost
                  description
                  images {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, PRODUCTS, cat);
  return result.categories.data;
};

export const getProducts = async () => {
  const PRODUCTS = gql`
    query getProducts {
      products(pagination: { limit: -1 }) {
        data {
          id
          attributes {
            title
            availability
            type
            model
            brand {
              data {
                attributes {
                  name
                }
              }
            }
            price
            cost
            description
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, PRODUCTS);
  return result.products.data;
};

export const getFeaturedProducts = async (variables: { limit: number }) => {
  const PRODUCTS = gql`
    query getFeaturedProducts($limit: Int!) {
      products(
        filters: { featured: { eq: true } }
        pagination: { limit: $limit }
      ) {
        data {
          id
          attributes {
            availability
            type
            title
            model
            brand {
              data {
                attributes {
                  name
                }
              }
            }
            price
            cost
            description
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, PRODUCTS, variables);
  return result.products.data;
};

export const getNewArrivalProducts = async (variables: { limit: number }) => {
  const PRODUCTS = gql`
    query getNewArrivalProducts($limit: Int!) {
      products(sort: "updatedAt:desc", pagination: { limit: $limit }) {
        data {
          id
          attributes {
            title
            availability
            type
            model
            brand {
              data {
                attributes {
                  name
                }
              }
            }
            price
            cost
            description
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, PRODUCTS, variables);
  return result.products.data;
};

export const getProductsIDs = async () => {
  const PRODUCTS = gql`
    query getProductsIDs {
      products(pagination: { limit: -1 }) {
        data {
          id
        }
      }
    }
  `;

  const result = await request(graphqlAPI, PRODUCTS);
  return result.products.data;
};
