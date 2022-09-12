import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;


export const getTypes = async () => {
  const TYPES = gql`
    query getTypes {
      products {
        data {
          attributes {
            type
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, TYPES);
  return result.products.data;
};

export const getFeaturedTypes = async () => {
  const TYPES = gql`
    query getBrands {
      products(filters: { featured: { eq: true } }) {
        data {
          attributes {
            type
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, TYPES);
  return result.products.data;
};

export const getCategoryTypes = async (category: string) => {
  const TYPES = gql`
    query getCategoryTypes($category: String!) {
      products(filters: { category: { title: { eq: $category } } }) {
        data {
          attributes {
            type
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, TYPES, { category });
  return result.products.data;
};
