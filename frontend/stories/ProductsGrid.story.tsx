import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductsGrid from "../components/ProductsGrid/Grid";
import { exampleProduct } from "./exampleProduct";

export default {
  title: "Main/ProductsGrid",
  component: ProductsGrid,
  args: {
    products: Array(8).fill(exampleProduct),
  },
} as ComponentMeta<typeof ProductsGrid>;

const Template: ComponentStory<typeof ProductsGrid> = (args) => (
  <ProductsGrid {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
  grid: true,
};

export const List = Template.bind({});
List.args = {
  grid: false,
};
