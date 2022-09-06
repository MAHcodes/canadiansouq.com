import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';
import { AddtoCart } from '../components/icons';

export default {
  title: 'Main/Button',
  component: Button,
  args: {
    size: "md",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Secondary",
};

export const Transparent = Template.bind({});
Transparent.args = {
  color: "transparent",
  children: "Transparent",
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "transparent",
  children: "Disabled",
  disabled: true,
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  color: "secondary",
  children: "Icon With Text",
  icon: <AddtoCart />,
};


export const IconNoText = Template.bind({});
IconNoText.args = {
  color: "transparent",
  icon: <AddtoCart />,
};
