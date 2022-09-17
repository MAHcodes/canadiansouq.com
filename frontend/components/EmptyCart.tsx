import { useRouter } from "next/router";
import React from "react";
import EmptyCardIcon from "../components/icons/EmptyCart";
import Button from "./Button";

interface Props {};

const EmptyCart: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <EmptyCardIcon />
      <p className="text-2xl text-danger font-bold mt-6">oops!</p>
      <p className="mt-2 mb-4">Your cart is empty!</p>
      <Button size="lg" onClick={() => router.push("/new-arrivals?page=0")}>
        Shop now
      </Button>
    </div>
  );
};

export default EmptyCart;
