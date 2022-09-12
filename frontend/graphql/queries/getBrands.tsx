import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getBrands = async () => {
  const BRANDS = gql`
    query getBrands {
      brands {
        data {
          attributes {
            name
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, BRANDS);
  return result.brands.data;
};

export const getCategoryBrands = async (category: string) => {
  const BRANDS = gql`
    query getBrands($category: String!) {
      brands(
        filters: { products: { category: { title: { eq: $category } } } }
      ) {
        data {
          attributes {
            name
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, BRANDS, { category });
  return result.brands.data;
};

export const getFeaturedBrands = async () => {
  const BRANDS = gql`
    query getBrands {
      brands(filters: { products: { featured: { eq: true } } }) {
        data {
          attributes {
            name
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, BRANDS);
  return result.brands.data;
};
