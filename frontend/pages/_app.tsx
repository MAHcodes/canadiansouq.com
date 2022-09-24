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

  if (!showChild) {
    return null
  };

  return (
    <Provider store={store}>
      <Header categories={categories} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default App;
