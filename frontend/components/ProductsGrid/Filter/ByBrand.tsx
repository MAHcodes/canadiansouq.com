import { IProduct } from "../../../types";
import CheckBox from "../../CheckBox";
import Box from "./Box";

interface Props {
  brands: string[];
  setProducts: (list: IProduct[]) => void;
  prods: IProduct[];
  filter: string[];
};

const ByBrand = ({ brands, setProducts, prods, filter }: Props) => {
  const filterByBrand = (item: string) => {
    filter.includes(item)
      ? filter.splice(filter.indexOf(item), 1)
      : filter.push(item);

    const newProducts = prods.filter((product) =>
      filter.includes(product.attributes.brand?.data.attributes.name!)
    );
    setProducts(newProducts);
  };

  return (
    <Box title="by brand">
      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <CheckBox
              text={brand}
              filter={filter}
              onChange={(text: string) => filterByBrand(text)}
            />
          </li>
        ))}
      </ul>
      </Box>
  );
};

export default ByBrand;
