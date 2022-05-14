import React from 'react';
import { Button } from '@components';

export default {
  title: 'Button',
  component: Button
};

function Template(args) {
  return <Button {...args}>Test</Button>;
}

export const Test = Template.bind({});
