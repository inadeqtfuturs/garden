import React from 'react';
import { Button } from '@components';

export default {
  title: 'Button',
  component: Button
};

const Template = args => <Button {...args}>Test</Button>;

export const Test = Template.bind({});
