import OptionsGroup from "./OptionsGroup";
import SearchInput from "./SearchInput";

type Props = {
  brands: string[];
  types: string[];
  filter: { brands: string[]; types: string[];  availability: string[] };
  dispatch: React.Dispatch<any>;
};

const Filter = ({ brands, types, filter, dispatch}: Props) => {
  return (
    <div className="bg-fff rounded-md mb-4 p-4 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%] animate-slideDownIn origin-top-right">
      <h3 className="text-center font-bold mb-2">Filter</h3>
      <SearchInput onChange={(e) => dispatch({type: "search", value: e.target.value})} />
      <div className="flex gap-3 flex-col sm:flex-row">
        {brands.length > 1 ? (
          <OptionsGroup
            title="by brand"
            options={brands}
            filter={filter.brands}
            onChange={(text) => dispatch({ type: "by-brands", value: text })}
          />
        ) : null}
        {types.length > 1 ? (
          <OptionsGroup
            title="by type"
            options={types}
            filter={filter.types}
            onChange={(text) => dispatch({ type: "by-types", value: text })}
          />
        ) : null}
        <OptionsGroup
          title="by availability"
          options={["In Stock", "Out of Stock"]}
          filter={filter.availability}
          onChange={(text) =>
            dispatch({ type: "by-availability", value: text })
          }
        />
      </div>
    </div>
  );
};

export default Filter;
