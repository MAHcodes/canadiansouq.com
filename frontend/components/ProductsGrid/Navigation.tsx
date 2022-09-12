import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import { Arrow, Grid, List, Filter } from "../icons";
import FilterOptions from "./Filter/";

type Props = {
  router: any;
  grid: boolean;
  setGrid: Dispatch<SetStateAction<boolean>>;
  brands: string[];
  types: string[];
  filter: { brands: string[], types: string[], availability: string[]}
  dispatch: React.Dispatch<any>
};

const Navigation = ({
  router,
  grid,
  setGrid,
  brands,
  types,
  filter,
  dispatch
}: Props) => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleGridChange = () => {
    localStorage.setItem("grid", JSON.stringify(!grid));
    setGrid((current: boolean) => !current);
  };

  return (
    <>
      <div className="flex py-4 items-center justify-between gap-2">
        <Button
          onClick={() => router.back()}
          color="transparent"
          icon={<Arrow className="rotate-90 w-6 h-6" />}
        />

        <h1 className="font-bold text-xl">{router.query.cat}</h1>

        <div className="flex items-stretch gap-2">
          <Button
            icon={grid ? <Grid /> : <List />}
            color="transparent"
            size="sm"
            onClick={handleGridChange}
          />
          <Button
            icon={<Filter active={openFilter} />}
            color="transparent"
            size="sm"
            onClick={() => setOpenFilter((current) => !current)}
          />
        </div>
      </div>

      {openFilter && (
        <FilterOptions
          brands={brands}
          types={types}
          filter={filter}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default Navigation;
