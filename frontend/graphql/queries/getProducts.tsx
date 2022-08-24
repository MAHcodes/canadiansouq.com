import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getFeaturedProducts = async () => {
  const PRODUCTS = gql`
    query getFeaturedProducts {
      products(filters: { featured: { eq: true } }) {
        data {
          attributes {
            availability
            featured
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, PRODUCTS);
  return result.products.data;
};
