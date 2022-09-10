import CheckBox from "../../CheckBox";
import Box from "./Box";

interface Props {
  brands: string[];
  filter: string[];
  dispatch: React.Dispatch<any>;
};

const ByBrand = ({ brands, filter, dispatch }: Props) => {

  return (
    <Box title="by brand">
      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <CheckBox
              text={brand}
              filter={filter}
              onChange={(text) => dispatch({ type: "by-brands", value: text })}
            />
          </li>
        ))}
      </ul>
      </Box>
  );
};

export default ByBrand;
