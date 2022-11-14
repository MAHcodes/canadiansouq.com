import { marked } from "marked";
import Link from "next/link";
import React from "react";

interface Props {
  id?: number;
  title?: string;
  grid?: boolean;
  description?: string;
}

const Info = ({ id, title, grid, description }: Props) => (
  <Link href={`/product/${id}`}>
    <div className="flex flex-col cursor-pointer flex-1">
      <div className="flex-1">
        <h2
          className={`text-lg my-2 two-lines group-hover:underline twolines ${grid && "font-semibold"
            }`}
        >
          {title}
        </h2>
        {grid && (
          <div
            className="text-gray text-base twolines pointer-events-none"
            dangerouslySetInnerHTML={{
              __html: marked.parse(description || ""),
            }}
          />
        )}
      </div>
    </div>
  </Link>
);

export default Info;
