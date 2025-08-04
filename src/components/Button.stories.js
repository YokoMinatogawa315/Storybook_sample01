import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ボタンのテキストコンテンツ',
      defaultValue: 'ボタン',
    },
    onClick: { action: 'clicked', description: 'ボタンがクリックされたときのイベント' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'normal', 'tertiary'],
      description: 'ボタンのスタイルバリアント',
      defaultValue: 'primary',
    },
    round: {
      control: { type: 'select' },
      options: ['round', 'square'],
      description: 'ボタンの角',
      defaultValue: 'square',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'ボタンのサイズ',
      defaultValue: 'medium',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  round: 'square',
  size: 'medium',
};

export const Normal = Template.bind({});
Normal.args = {
  children: 'Normal Button',
  variant: 'normal',
  round: 'square',
  size: 'medium',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary Button',
  variant: 'tertiary',
  round: 'square',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  variant: 'primary',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  variant: 'primary',
  size: 'large',
};