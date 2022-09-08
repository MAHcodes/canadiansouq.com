import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/Nprogress.css";
import { getCategories } from "../graphql/queries/getCategories";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { saveState } from "../redux/browserStorage";
import { debounce } from "debounce";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 0)
);

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header categories={pageProps.categories} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
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
