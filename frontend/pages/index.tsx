import OurBrands from "../sections/OurBrands";
import Head from "next/head";
import Hero from "../sections/Hero";
import Feutures from "../sections/Feutures";
import React from "react";
import { getFeaturedProducts } from "../graphql/queries/getProducts";
import { IProduct } from "../types";

const Home = ({ featuredProducts }: { featuredProducts: IProduct[] }) => {
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
    </div>
  );
};

export const getServerSideProps = async () => {
  const featuredProducts = await getFeaturedProducts();
  return {
    props: {
      featuredProducts,
    },
  };
};

export default Home;
