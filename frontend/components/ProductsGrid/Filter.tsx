import { IProduct } from "../../types";
import CheckBox from "../CheckBox";

type Props = {
  brands: string[];
  setProducts: any;
  prods: IProduct[];
  filter: string[];
};

const Filter = ({brands, setProducts, prods, filter}: Props) => {
  const filterByBrands = (brands: string[]) => {
    const newProducts = prods.filter(product => brands.includes(product.attributes.brand?.data.attributes.name!) );
    setProducts(newProducts);
  }

  const updateFilters = (item: string) => {
    filter.includes(item) ? filter.splice(filter.indexOf(item), 1) : filter.push(item);
    filterByBrands(filter)
  }

  return (
    <div className="bg-fff rounded-md mb-4 p-4 relative before:absolute before:border-b-fff before:border-solid before:border-transparent before:border-8 before:top-0 before:right-2 before:translate-y-[-100%] animate-slideDownIn origin-top-right">
      <h3 className="text-center font-bold">Filter</h3>
      brand:
      <ul>
        {brands.map(brand => <li key={brand}>
          <CheckBox text={brand} onChange={(text: string) => updateFilters(text)} />
        </li>)}
      </ul>
    </div>
  );
};

export default Filter;
