import { IProduct } from "../../types";
import CheckBox from "../CheckBox";

type Props = {
  brands: string[];
  setProducts: (list: IProduct[]) => void;
  prods: IProduct[];
  filter: string[];
};

const Filter = ({ brands, setProducts, prods, filter }: Props) => {

  const filterByBrands = (brands: string[]) => {
    const newProducts = prods.filter((product) =>
      brands.includes(product.attributes.brand?.data.attributes.name!)
    );
    setProducts(newProducts);
  };

  const updateFilters = (item: string) => {
    filter.includes(item)
      ? filter.splice(filter.indexOf(item), 1)
      : filter.push(item);
    filterByBrands(filter);
  };

  return (
    <div className="bg-fff rounded-md mb-4 p-4 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%] animate-slideDownIn origin-top-right">
      <h3 className="text-center font-bold mb-4">Filter</h3>
      <div className="border rounded-md p-2 pt-5 my-2 relative">
        <p className="text-base bg-fff absolute top-0 translate-y-[-50%] px-2">by brand</p>
        <ul>
          {brands.map((brand) => (
            <li key={brand}>
              <CheckBox
                text={brand}
                filter={filter}
                onChange={(text: string) => updateFilters(text)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
