import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import { Arrow, Grid, List } from "../icons";

type Props = {
  router: any;
  grid: boolean;
  setGrid: Dispatch<SetStateAction<boolean>>;
};

const Navigation = ({ router, grid, setGrid }: Props) => {
  return (
    <div className="flex py-4 items-center justify-between">
      <Button
        pad="0"
        icon
        text={<Arrow className="w-full h-full rotate-90" />}
        onClick={() => router.back()}
      />

      <h1 className="font-bold text-xl">{router.query.cat}</h1>

      <Button
        pad="0"
        icon
        text={grid ? <Grid /> : <List />}
        onClick={() => setGrid((current: boolean) => !current)}
      />
    </div>
  );
};

export default Navigation;
