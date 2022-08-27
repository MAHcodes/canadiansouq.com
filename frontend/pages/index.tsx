import OurBrands from "../sections/OurBrands";
import Head from "next/head";
import Hero from "../sections/Hero";
import Feutures from "../sections/Feutures";
import React from "react";
import { getFeaturedProducts, getNewArrivalProducts } from "../graphql/queries/getProducts";
import { IProduct } from "../types";
import ProductsSlider from "../components/ProductsSlider";

interface Props {
  featuredProducts: IProduct[];
  newArrivalProcucts: IProduct[];
}

const Home = ({ featuredProducts, newArrivalProcucts }: Props ) => {
  console.log(featuredProducts[0].attributes.featured);
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
      <ProductsSlider title="Featured Products" slug="featured" products={featuredProducts} />
      <ProductsSlider title="New Arrivals" slug="new-arrival" products={newArrivalProcucts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredProducts = await getFeaturedProducts({limit: 16});
  const newArrivalProcucts = await getNewArrivalProducts({limit: 16});
  return {
    props: {
      featuredProducts,
      newArrivalProcucts,
    },
  };
};

export default Home;
