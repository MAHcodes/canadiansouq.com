import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/Nprogress.css";
import { getCategories } from "../graphql/queries/getCategories";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header categories={pageProps.categories} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

App.getInitialProps = async () => {
  let pageProps: {categories?: string[]} = {};

  try {
    const categoriesArray = await getCategories();
    const categories= categoriesArray.map((category: {attributes: {title: string}}) => category.attributes.title);
    pageProps.categories = categories;
  } catch (error) {
    console.log(error);
  }

  return {
    pageProps,
  };
};

export default App;
