import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import Card from "../components/Card";
import { store } from "../redux/store";
import { exampleProduct } from "./exampleProduct";

export default {
  title: "Card",
  component: Card,
  args: {
    product: exampleProduct,
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Provider store={store}>
    <Card {...args} />
  </Provider>
);

export const List = Template.bind({});
List.args = {
  grid: false,
};

export const Grid = Template.bind({});
Grid.args = {
  grid: true,
};
