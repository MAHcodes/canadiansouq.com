import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import React from "react";
import { Footer } from "../components/Footer";
import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/Nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
