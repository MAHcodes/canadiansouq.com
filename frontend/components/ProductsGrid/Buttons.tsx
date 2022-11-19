import React from "react";
import Button from "../Button";
import { Grid, List, Filter } from "../icons";
import { Dispatch, SetStateAction } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  grid: boolean;
  title?: string;
  setGrid: Dispatch<SetStateAction<boolean>>;
  openFilter: boolean;
  setOpenFilter: Dispatch<SetStateAction<boolean>>;
}

const Buttons: React.FC<Props> = ({
  grid,
  openFilter,
  setOpenFilter,
  setGrid,
}) => {
  const handleGridChange = () => {
    localStorage.setItem("grid", JSON.stringify(!grid));
    setGrid((current: boolean) => !current);
  };

  return (
    <div className="flex items-stretch gap-2">
      <Button
        icon={grid ? <Grid /> : <List />}
        title={grid ? "Grid View" : "List View"}
        variant="transparent"
        size="sm"
        onClick={handleGridChange}
      />
      <Button
        icon={<Filter active={openFilter} />}
        title="Filter products"
        variant="transparent"
        size="sm"
        onClick={() => setOpenFilter((current) => !current)}
      />
    </div>
  );
};

export default Buttons;
