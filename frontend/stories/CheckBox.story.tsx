import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckBox from '../components/CheckBox';

export default {
  title: 'Main/CheckBox',
  component: CheckBox,
  args: {
    size: "md",
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Checkbox",
  filter: [],
};
