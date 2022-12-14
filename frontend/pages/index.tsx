import OurBrands from "../sections/OurBrands";
import Hero from "../sections/Hero";
import Feutures from "../sections/Feutures";
import {
  getFeaturedProducts,
  getNewArrivalProducts,
} from "../graphql/queries/getProducts";
import { IProduct } from "../types/";
import ProductsSlider from "../components/ProductsSlider";
import Head from "next/head";

interface Props {
  featuredProducts: IProduct[];
  newArrivalProcucts: IProduct[];
}

const Home = ({ featuredProducts, newArrivalProcucts }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>
          Canadian Souq - Buy ORIGINAL products from Canada in Lebanon
        </title>
        <meta
          name="title"
          content="Canadian Souq - Buy ORIGINAL products from Canada in Lebanon"
        />
        <meta
          name="description"
          content="Online Lebanon Store offering ORIGINAL products and Tools from Canada in Lebanon!"
        />
        <meta
          property="og:description"
          content="Online Lebanon Store offering ORIGINAL products and Tools from Canada in Lebanon!"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOST}/images/hero.avif`}
        />
        <meta property="og:site_name" content={process.env.NEXT_PUBLIC_HOST}>
          <meta
            name="twitter:description"
            content="Online Lebanon Store offering ORIGINAL products and Tools from Canada in Lebanon!"
          />
          <meta
            name="twitter:image"
            content={`${process.env.NEXT_PUBLIC_HOST}/images/hero.avif`}
          />
          <meta
            name="keywords"
            content="dewalt in lebanon,milwaukee in lebanon, hilti in lebanon"
          />
          <meta name="theme-color" content="#242424" />
          <link
            rel="shortcut icon"
            href={`${process.env.NEXT_PUBLIC_HOST}/images/logo.svg`}
            type="image/x-icon"
          />

          <meta property="og:url" content={process.env.NEXT_PUBLIC_HOST} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Canadian Souq - Buy ORIGINAL products from Canada in Lebanon"
          />

          <meta name="robots" content="index, follow" />
        </meta>
      </Head>
      <Hero />
      <OurBrands />
      <Feutures />
      <ProductsSlider
        title="Featured Products"
        slug="featured"
        products={featuredProducts}
        className="container"
      />
      <ProductsSlider
        title="New Arrivals"
        slug="new-arrivals"
        products={newArrivalProcucts}
        className="container"
      />
    </>
  );
};

export const getStaticProps = async () => {
  const featuredProducts = await getFeaturedProducts({ limit: 14 });
  const newArrivalProcucts = await getNewArrivalProducts({ limit: 14 });

  return {
    props: {
      featuredProducts,
      newArrivalProcucts,
    },
  };
};

export default Home;
