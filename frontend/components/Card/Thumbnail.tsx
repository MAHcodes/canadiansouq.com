import Link from "next/link";
import React from "react";

interface Props {
  id?: number;
  grid?: boolean;
  src?: string;
  alt?: string;
}

const Thumbnail = ({ id, grid, src, alt }: Props) => {
  return (
    <Link href={`/product/${id}`}>
      <div
        className={`flex items-center justify-center aspect-square cursor-pointer overflow-hidden rounded-lg mx-auto ${grid
            ? "basis-44 min-w-[6rem] max-w-[8rem] md:max-w-[14rem]"
            : "max-w-[14rem]"
          }`}
      >
        <img
          className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform"
          src={"/images" + src}
          alt={alt}
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default Thumbnail;
