import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getFeaturedProducts = async (variables: {limit: number}) => {
  const PRODUCTS = gql`
    query getFeaturedProducts($limit: Int!) {
      products(filters: { featured: { eq: true }} , pagination: { limit: $limit } ) {
        data {
          id
          attributes {
            title
            model
            brand {
              data {
                attributes {
                  name
                }
              }
            }
            availability
            price
            cost
            description
            categories {
              data {
                attributes {
                  title
                }
              }
            }
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
      products(sort: "createdAt:desc", pagination: { limit: $limit }) {
        data {
          id
          attributes {
            title
            model
            brand {
              data {
                attributes {
                  name
                }
              }
            }
            availability
            price
            cost
            description
            categories {
              data {
                attributes {
                  title
                }
              }
            }
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
      products {
        data {
          id
        }
      }
    }
  `;

  const result = await request(graphqlAPI, PRODUCTS);
  return result.products.data;
};

export const getProduct = async (id: number) => {
  const PRODUCTS = gql`
    query getProduct($id: ID!) {
      product(id: $id) {
        data {
          id
          attributes {
            title
            model
            brand {
              data {
                attributes {
                  name
                }
              }
            }
            availability
            price
            cost
            description
            categories {
              data {
                attributes {
                  title
                }
              }
            }
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

  const result = await request(graphqlAPI, PRODUCTS, { id });
  return result.product.data;
};

