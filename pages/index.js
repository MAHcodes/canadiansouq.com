import Head from "next/head";
import Hero from "../components/Hero";
import OurBrands from "../components/OurBrands";
import Features from "../components/Features";
import ProductsCarousel from "../components/ProductsCarousel";

export default function Home() {
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
      <ProductsCarousel title="Featured Products" all="/products/featured" />
    </>
  );
}
