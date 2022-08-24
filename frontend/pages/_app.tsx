import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import React from "react";
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../utils/initApollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
