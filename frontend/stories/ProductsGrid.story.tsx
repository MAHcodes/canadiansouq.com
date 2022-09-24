import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import ProductsGrid from "../components/ProductsGrid/Grid";
import { store } from "../redux/store";
import { exampleProduct } from "./exampleProduct";

export default {
  title: "ProductsGrid",
  component: ProductsGrid,
  args: {
    filteredProducts: Array(8).fill(exampleProduct),
  },
} as ComponentMeta<typeof ProductsGrid>;

const Template: ComponentStory<typeof ProductsGrid> = (args) => (
  <Provider store={store}>
    <ProductsGrid {...args} />
  </Provider>
);

export const Grid = Template.bind({});
Grid.args = {
  grid: true,
};

export const List = Template.bind({});
List.args = {
  grid: false,
};
