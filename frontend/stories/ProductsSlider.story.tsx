import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import ProductsSlider from "../components/ProductsSlider";
import { store } from "../redux/store";
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
  <Provider store={store}>
    <ProductsSlider {...args} />
  </Provider>
);

export const Slider = Template.bind({});
Slider.args = {};
