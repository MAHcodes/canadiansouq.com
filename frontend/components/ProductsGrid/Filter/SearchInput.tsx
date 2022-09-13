import { useRouter } from "next/router";
import React from "react";
import Box from "./Box";

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {};

const SearchInput:React.FC<Props> = (props) => {
  const { query: { cat = "" } } = useRouter();

  return (
    <Box title="search" className="relative p-1 pt-2 my-3 ">
      <input
        id="search"
        type="search"
        placeholder={`search products ${cat ? "in" : ""} ${cat}`}
        className="w-full rounded-md p-2 text-base focus:outline-none"
        {...props}
      />
    </Box>
  );
};

export default SearchInput;
