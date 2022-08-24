import { gql, useQuery } from "@apollo/client";

const getFeaturedProducts = () => {
  const PRODUCTS = gql`
    query getFeaturedProducts {

    }
`;

  const { data, error } = useQuery(PRODUCTS);
  return { data, error };
};

export default getFeaturedProducts;
