import { server } from "../../../config";
import ProductsGrid from "../../../components/ProductsGrid";

const Products = ({ prods }) => {
  return <ProductsGrid prods={prods} />;
};

export async function getServerSideProps(context) {
  const { cat, brand } = context.params;

  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  const newProducts = Object.entries(products).filter((product) => {
    if (brand === "All") return product[1].category === cat;
    return product[1].brand === brand && product[1].category === cat;
  });

  const prods = newProducts.map((product) => {
    return {
      id: product[1].id,
      title: product[1].title,
      category: product[1].category,
      cost: product[1].cost,
      price: product[1].price,
      image: product[1].images[0],
    };
  });

  return {
    props: {
      prods: prods,
    },
  };
}

export default Products;
