import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../components/Card";
import { exampleProduct } from "./exampleProduct";

export default {
  title: 'Main/Card',
  component: Card,
  args: {
    product: exampleProduct,
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;


export const List = Template.bind({});
List.args = {
  grid: false,
};


export const Grid = Template.bind({});
Grid.args = {
  grid: true,
};
