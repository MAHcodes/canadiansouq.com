import OurBrands from "../sections/OurBrands";
import Hero from "../sections/Hero";
import Feutures from "../sections/Feutures";
import { getFeaturedProducts, getNewArrivalProducts } from "../graphql/queries/getProducts";
import { IProduct } from "../types/";
import ProductsSlider from "../components/ProductsSlider";

interface Props {
  featuredProducts: IProduct[];
  newArrivalProcucts: IProduct[];
}

const Home = ({ featuredProducts, newArrivalProcucts }: Props ) => {
  return (
    <div>
      <Hero />
      <OurBrands />
      <Feutures />
      <ProductsSlider title="Featured Products" slug="featured" products={featuredProducts} className="container" />
      <ProductsSlider title="New Arrivals" slug="new-arrivals" products={newArrivalProcucts} className="container" />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredProducts = await getFeaturedProducts({limit: 14});
  const newArrivalProcucts = await getNewArrivalProducts({limit: 14});

  return {
    props: {
      featuredProducts,
      newArrivalProcucts,
    },
  };
};

export default Home;
