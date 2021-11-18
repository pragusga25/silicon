import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button from '../src/components/atoms/Button';
import { CustomButtonProps } from '../src/types/button';

export default {
  title: 'silicon-ui/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg', '1/2', 'full'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

export const Default: Story<CustomButtonProps> = (args) => <Button {...args} />;

Default.args = {
  variant: 'primary',
  size: 'md',
  text: 'Button',
};
