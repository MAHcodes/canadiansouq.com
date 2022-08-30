import { gql, request } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const getCategoryBrands = async (category: string) => {
  const CATEGORIES = gql`
    query getBrands($category: String!) {
      brands(filters: { categories: { title: { eq: $category } } }) {
        data {
          attributes {
            name
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, CATEGORIES, {category});
  return result.brands.data;
};
