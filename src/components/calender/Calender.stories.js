import React from 'react';

import { Calender } from './Calender.js';


export default {
  title: 'UI/Calender',
  component: Calender,  
  argTypes: {},
};


const Template = (args) => <Calender {...args} />;

export const DefaultCalender = Template.bind({});
DefaultCalender.args = {};
