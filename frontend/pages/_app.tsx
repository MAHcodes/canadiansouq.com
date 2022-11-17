import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/Nprogress.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { saveState } from "../redux/browserStorage";
import { useEffect, useState } from "react";
import categories from "../constants/categories.json";
import Head from "next/head";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

store.subscribe(() => saveState(store.getState()));

function App({ Component, pageProps }: AppProps) {

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild && process.env.NODE_ENV !== "production") {
    return null
  };

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="keywords" content="dewalt in lebanon,milwaukee in lebanon, matco tools in lebanon, hilti in lebanon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#242424" />
      </Head>
      <Header categories={categories} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default App;
