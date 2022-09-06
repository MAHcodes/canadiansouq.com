import OurBrands from "../sections/OurBrands";
import Head from "next/head";
import Hero from "../sections/Hero";
import Feutures from "../sections/Feutures";
import { getFeaturedProducts, getNewArrivalProducts } from "../graphql/queries/getProducts";
import { IProduct } from "../types/IProduct";
import ProductsSlider from "../components/ProductsSlider";

interface Props {
  featuredProducts: IProduct[];
  newArrivalProcucts: IProduct[];
}

const Home = ({ featuredProducts, newArrivalProcucts }: Props ) => {
  return (
    <div>
      <Head>
        <title>Canadian Souq</title>
        <meta
          name="description"
          content="We offer you ORIGINAL products from Canada in Lebanon!"
        />
        <meta name="theme-color" content="#242424" />
      </Head>

      <Hero />
      <OurBrands />
      <Feutures />
      <ProductsSlider title="Featured Products" slug="featured" products={featuredProducts} className="container" />
      <ProductsSlider title="New Arrivals" slug="new-arrivals" products={newArrivalProcucts} className="container" />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredProducts = await getFeaturedProducts({limit: 15});
  const newArrivalProcucts = await getNewArrivalProducts({limit: 15});

  return {
    props: {
      featuredProducts,
      newArrivalProcucts,
    },
  };
};

export default Home;
