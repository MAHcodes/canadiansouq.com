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
        <meta name="theme-color" content="#242424" />
      </Head>

      <main className="py-12">
        <div className="container flex items-center justify-between flex-col">
          <h2 className="text-3xl text-center font-bold max-w-[28ch] leading-relaxed">
            We offer you{" "}
            <span className="uppercase relative">
              Original
              <img
                className="absolute bottom-0 left-0 right-0 w-full translate-y-1/2"
                src="/images/underline.svg"
                alt=""
              />
            </span>{" "}
            Products from Canada in Lebanon!
          </h2>
          <div className="w-[70vw] max-w-[750px] relative my-16">
            <img className="mx-auto mb-4" src="/images/lebanonTag.svg" alt="Lebanon pin tag" />
            <img src="/images/hero.png" alt="Our Power tools brands" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
