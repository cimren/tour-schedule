import React from 'react';
import { Dropdown } from './Dropdown.js';

export default {
  title: 'common/Dropdown',
  component: Dropdown,  
  argTypes: {},
};

const Template = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  options: [
    {value: "1", text: "Option 1"},
    {value: "2", text: "Option 2"},
    {value: "3", text: "Option 3"},
  ]
};
