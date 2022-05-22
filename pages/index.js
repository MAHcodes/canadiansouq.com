import Head from "next/head";
import Hero from "../components/Hero";
import OurBrands from "../components/OurBrands";
import Features from "../components/Features";
import ProductsCarousel from "../components/ProductsCarousel";
import { FeaturedProductsIDs } from "../stores/products";
import { server } from '../config';
import ROUTES from "../stores/routes";

export default function Home({FeaturedProducts}) {
  return (
    <>
      <Head>
        <title>Canadian Souq</title>
        <meta name="description" content="We offer you ORIGINAL products from Canada in Lebanon!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#242424" />
      </Head>
      <Hero />
      <OurBrands />
      <Features />
      <ProductsCarousel title="Featured Products" productsList={FeaturedProducts} all={ROUTES.FeaturedRoute} />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  return { props: { FeaturedProducts: FeaturedProductsIDs.map(id => products[id]) } };
}
