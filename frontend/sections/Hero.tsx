import Button from "../components/Button";
import React from "react";

const Hero = () => (
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
        products from Canada in Lebanon!
      </h2>
      <div className="w-[70vw] max-w-[750px] relative my-12">
        <img
          className="mx-auto mb-4"
          src="/images/lebanonTag.svg"
          alt="Lebanon pin tag"
        />
        <img src="/images/hero.avif" alt="Our Power tools brands" />
      </div>
      <Button text="Shop now" main />
    </div>
  </main>
);

export default Hero;
