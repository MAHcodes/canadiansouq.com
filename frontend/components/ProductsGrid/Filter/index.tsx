import OptionsGroup from "./OptionsGroup";

type Props = {
  brands: string[];
  filter: { brands: string[], availability: string[] };
  dispatch: React.Dispatch<any>;
};

const Filter = ({ brands, filter, dispatch }: Props) => {
  return (
    <div className="bg-fff rounded-md mb-4 p-4 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%] animate-slideDownIn origin-top-right">
      <h3 className="text-center font-bold mb-2">Filter</h3>
      <OptionsGroup
        title="by brand"
        options={brands}
        filter={filter.brands}
        onChange={(text) => dispatch({ type: "by-brands", value: text })}
      />
      <OptionsGroup
        title="by availability"
        options={["In Stock", "Out of Stock"]}
        filter={filter.availability}
        onChange={(text) => dispatch({ type: "by-availability", value: text })}
      />

    </div>
  );
};

export default Filter;
