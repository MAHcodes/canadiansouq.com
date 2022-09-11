import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import { store } from "../redux/store";

export default {
  title: 'Main/Header',
  component: Header,
  args: {
    categories: ["Power Tools", "Electronics", "Games"],
  } 
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Provider store={store}> <Header {...args} /></Provider>


export const List = Template.bind({});
List.args = {};
