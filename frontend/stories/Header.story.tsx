import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "../components/Header";

export default {
  title: 'Main/Header',
  component: Header,
  args: {
    categories: ["Power Tools", "Electronics", "Games"],
  } 
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;


export const List = Template.bind({});
List.args = {};
