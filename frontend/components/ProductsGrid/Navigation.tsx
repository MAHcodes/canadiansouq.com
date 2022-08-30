import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import { Arrow, Grid, List, Filter } from "../icons";
import FilterOptions from "./Filter";

type Props = {
  router: any;
  grid: boolean;
  setGrid: Dispatch<SetStateAction<boolean>>;
  brands: string[];
};

const Navigation = ({ router, grid, setGrid, brands }: Props) => {
  const [filter, setFilter] = useState(true);

  return (
    <>
      <div className="flex py-4 items-center justify-between">
        <Button
          pad="0"
          icon
          text={<Arrow className="w-full h-full rotate-90 min-w-max" />}
          onClick={() => router.back()}
        />

        <h1 className="font-bold text-xl">{router.query.cat}</h1>

        <div className="flex items-center gap-2">
          <Button
            pad="0"
            icon
            text={grid ? <Grid /> : <List />}
            onClick={() => setGrid((current: boolean) => !current)}
          />
          <Button text={<Filter active={filter} />} pad="0" icon onClick={() => setFilter(current => !current)} />
        </div>
      </div>

      {filter && <FilterOptions brands={brands} />}
    </>
  );
};

export default Navigation;
