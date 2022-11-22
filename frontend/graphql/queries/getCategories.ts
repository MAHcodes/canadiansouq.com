import { gql, request } from "graphql-request";
const graphqlAPI = process.env.GRAPHQL_ENDPOINT!;

export const getCategories = async () => {
  const CATEGORIES = gql`
    query getAll {
      categories {
        data {
          attributes {
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, CATEGORIES);
  return result.categories.data;
};
