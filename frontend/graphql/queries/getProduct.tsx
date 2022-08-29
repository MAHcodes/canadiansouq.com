import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

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
            condition
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
