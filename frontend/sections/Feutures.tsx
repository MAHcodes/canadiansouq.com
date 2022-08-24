import React from "react";
import {
  DeliveryTruck,
  OriginalBadge,
  BestPrices,
  CashOnDelivery,
} from "../components/icons";

const Feutures = () => (
  <section className="container ">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-12">
      <Feature Icon={DeliveryTruck} title="Delivery all over Lebanon" />
      <Feature Icon={OriginalBadge} title="Original products" />
      <Feature Icon={BestPrices} title="Best prices" />
      <Feature Icon={CashOnDelivery} title="Cash on delivery" />
    </div>
  </section>
);

interface Props {
  title: string;
  Icon: React.FunctionComponent;
}

const Feature = ({ Icon, title }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 flex-col p-8 text-center rounded-lg bg-fff">
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default Feutures;
