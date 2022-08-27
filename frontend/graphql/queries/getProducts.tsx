import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getFeaturedProducts = async () => {
  const PRODUCTS = gql`
    query getFeaturedProducts {
      products(filters: { featured: { eq: true } }) {
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

  const result = await request(graphqlAPI, PRODUCTS);
  return result.products.data;
};

export const getNewArrivalProducts = async () => {
  const PRODUCTS = gql`
    query getNewArrivalProducts {
      products(filters: { new: { eq: true } }) {
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

  const result = await request(graphqlAPI, PRODUCTS);
  return result.products.data;
};
