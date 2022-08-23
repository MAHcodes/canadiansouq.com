import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Canadian Souq</title>
        <meta
          name="description"
          content="We offer you ORIGINAL products from Canada in Lebanon!"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#242424" />
      </Head>

      <main className="container">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </div>
  );
};

export default Home;
