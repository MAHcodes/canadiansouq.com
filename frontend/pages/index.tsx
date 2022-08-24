import type { NextPage } from "next";
import OurBrands from "../sections/OurBrands";
import Head from "next/head";
import Hero from "../sections/Hero";
import Feutures from "../sections/Feutures";
import React from "react";
import ProductsSlider from "../components/ProductsSlider";
import getProducts from "../graphql/queries/getProducts";

const Home: NextPage = () => {
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
      <ProductsSlider 
        title="Featured Products"
        />

    </div>
  );
};

export const getStaticProps = async () => {
  const { error, data } = getProducts();

  if (error) console.log(error);

  return {
    props: {
      products: data;
    }
  }
}

export default Home;
