import React from "react";

const Credit = () => (
  <div className="container text-base">
    <div className="flex items-center justify-between flex-col md:flex-row gap-4 border-t border-solid border-t-gray border-opacity-25 py-4 mt-4">
      <p>
        Made with &#10084;&#65039; by{" "}
        <a
          href="https://github.com/mhmdali102"
          target="_blank"
          rel="noreferrer"
          className="underline font-bold transition-colors hover:text-white"
        >
          Mhmd Ali Hsen
        </a>
      </p>
      <p>
        Canadian Souq &copy; All rights reserved - {new Date().getFullYear()}
      </p>
    </div>
  </div>
);

export default Credit;
