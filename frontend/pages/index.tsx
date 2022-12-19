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

const TITLE = "Canadian Souq - Buy ORIGINAL products from Canada in Lebanon";
const DESC =
  "Online Lebanon Store offering ORIGINAL products and Tools from Canada in Lebanon!";
const IMG = `${process.env.NEXT_PUBLIC_HOST}/images/hero.avif`;

const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  image: [IMG],
  "@id": process.env.NEXT_PUBLIC_HOST,
  name: "Canadian Souq",
  address: {
    "@type": "PostalAddress",
    streetAddress: " Maifadoun, Nabatiye",
    addressLocality: "Maifadoun, Nabatiye",
    postalCode: "00000",
    addressRegion: "Nabatiye",
    addressCountry: "Lebanon",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "MAHcodes",
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.34281465765527,
    longitude: 35.47657401119449,
  },
  url: process.env.NEXT_PUBLIC_HOST,
  telephone: "+96181921320",
  openingHours: "Mo-Sa 09:00-17:00",
  acceptsReservations: "True",
};

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
        <title>{TITLE}</title>
        <meta name="title" content={TITLE} />
        <meta name="description" content={DESC} />
        <meta name="theme-color" content="#242424" />
        <meta
          name="keywords"
          content="dewalt in lebanon,milwaukee in lebanon, hilti in lebanon"
        />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_HOST}/images/logo.svg`}
          type="image/x-icon"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={process.env.NEXT_PUBLIC_HOST} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={DESC} />
        <meta property="og:image" content={IMG} />
        <meta property="og:site_name" content="Canadian Souq" />

        <meta name="twitter:description" content={DESC} />
        <meta name="twitter:image" content={IMG} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />

        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(storeJsonLd),
          }}
        />
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
