import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../components/Card";

export default {
  title: 'Main/Card',
  component: Card,
  args: {
    size: "md",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const exampleProduct = {
  "id": 1,
  "attributes": {
    "title": "title",
    "model": "model",
    "brand": {
      "data": {
        "attributes": {
          "name": "Diablo",
        }
      }
    },
    "availability": 2,
    "price": 2,
    "cost": 1,
    "condition": "New",
    "description": "desc",
    "images": {
      "data": [
        {
          "attributes": {
            "url": "/uploads/DD_5116_f46a58c836.jpg"
          }
        },
        {
          "attributes": {
            "url": "/uploads/Whats_App_Image_2022_02_22_at_7_51_40_PM_1e2e3d8ac7.jpeg"
          }
        },
        {
          "attributes": {
            "url": "/uploads/Whats_App_Image_2022_02_22_at_7_51_39_PM_39ca9f76f1.jpeg"
          }
        },
        {
          "attributes": {
            "url": "/uploads/Whats_App_Image_2022_02_22_at_7_51_46_PM_66e32d565c.jpeg"
          }
        }
      ]
    }
  }
}

export const List = Template.bind({});
List.args = {
  grid: false,
  product: exampleProduct,
};


export const Grid = Template.bind({});
Grid.args = {
  grid: true,
  product: exampleProduct,
};
