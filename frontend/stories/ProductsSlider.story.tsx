import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductsSlider from "../components/ProductsSlider";
import { exampleProduct } from "./exampleProduct";

export default {
  title: "Main/ProductsSlider",
  component: ProductsSlider,
  args: {
    title: "Test Products",
    products: Array(15).fill(exampleProduct),
  },
} as ComponentMeta<typeof ProductsSlider>;

const Template: ComponentStory<typeof ProductsSlider> = (args) => (
  <ProductsSlider {...args} />
);

export const Slider = Template.bind({});
Slider.args = {};
