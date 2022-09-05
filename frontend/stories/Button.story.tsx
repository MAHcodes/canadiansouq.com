import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';
import { AddtoCart } from '../components/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Secondary",
  size: "md",
};

export const Transparent = Template.bind({});
Transparent.args = {
  color: "transparent",
  children: "Transparent",
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "transparent",
  children: "Disabled",
  size: "md",
  disabled: true,
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  color: "secondary",
  children: "Icon With Text",
  size: "md",
  icon: <AddtoCart width="100%" height="100%" />,
};


export const IconNoText = Template.bind({});
IconNoText.args = {
  color: "transparent",
  size: "sq",
  icon: <AddtoCart width="100%" height="100%" />,
};
