import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '入力欄のプレースホルダーテキスト',
      defaultValue: 'テキストを入力',
    },
    value: {
      control: 'text',
      description: '入力欄の値',
    },
    variant: {
      control: { type: 'select' },
      options: ['blank', 'placeholder', 'string', 'checklabel'],
      description: '入力フォームのスタイル',
      defaultValue: 'blank',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'focus', 'error'],
      description: '入力フォームの状態',
      defaultValue: 'default',
    },
    helperText: {
      control: 'text',
      description: '入力欄の下に表示されるヘルパーテキスト',
    },
    onClick: { action: 'clicked', description: 'クリックイベント' },
  },
};


const Template = (args) => <Input {...args} />;


export const blank = Template.bind({});
blank.args = {
  placeholder: '',
  value: '',
  variant: 'blank',
  state: 'default',
};

export const placeholder = Template.bind({});
placeholder.args = {
  placeholder: '氏名（例：アマゾン 太郎）',
//  value: '',
  variant: 'placeholder',
  state: 'default',
};

export const string = Template.bind({});
string.args = {
  placeholder: '{placeholder}',
  value: 'テキスト',
  variant: 'string',
  state: 'default',
};

export const checklabel = Template.bind({});
checklabel.args = {
  placeholder: '{placeholder}',
  value: 'テキスト',
  variant: 'checklabel',
  state: 'focus',
};

export const checklabelDefault = Template.bind({});
checklabelDefault.args = {
  placeholder: '氏名（例：アマゾン 太郎）',
  value: '', 
  variant: 'checklabel',
  state: 'default',
};

export const placeholderError = Template.bind({});
placeholderError.args = {
  placeholder: '氏名（例：アマゾン 太郎）',
  value: '', 
  variant: 'placeholder',
  state: 'error',
};


