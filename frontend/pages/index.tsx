import type { NextPage } from "next";
import OurBrands from "../sections/OurBrands";
import Head from "next/head";
import Hero from "../sections/Hero";
import Feutures from "../sections/Feutures";
import React from "react";

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

    </div>
  );
};

export default Home;
