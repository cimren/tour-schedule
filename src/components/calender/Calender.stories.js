import React from 'react';
import { Calender } from './Calender.js';

export default {
  title: 'UI/Calender',
  component: Calender,  
  argTypes: {},
};

const Template = (args) => <Calender {...args} />;

export const DefaultCalender = Template.bind({});
DefaultCalender.args = {
  tours: [
    {
      id: "61792aa25ae2665bc03c0827",
      startTime: 40500,
      duration: 3600,
      day: 3,
      nbParticipants: 14
    },
    {
      id: "61792aa2554f8bb0ea07defa",
      startTime: 49500,
      duration: 3600,
      day: 4,
      nbParticipants: 7
    },
    {
      id: "61792aa2554f8888ea07defa",
      startTime: 49500,
      duration: 3600,
      day: 2,
      nbParticipants: 7
    },
    {
      id: "61792aa2554f8bb0ea07defa",
      startTime: 37800,
      duration: 1800,
      day: 3,
      nbParticipants: 2
    },
    {
      id: "61792aa25ae2665bc03c0827",
      startTime: 54000,
      duration: 3600,
      day: 3,
      nbParticipants: 4
    },
    {
      id: "61792aa2b757d0e53ea584de",
      startTime: 45000,
      duration: 3600,
      day: 3,
      nbParticipants: 15
    },
    {
      id: "61792aa2b757d0e53ea584de",
      startTime: 54000,
      duration: 3600,
      day: 1,
      nbParticipants: 14
    },
    {
      id: "61792aa238c64cb6c4a8f7dd",
      startTime: 40500,
      duration: 3600,
      day: 3,
      nbParticipants: 1
    },
    {
      id: "61792aa203c836274a19516a",
      startTime: 35100,
      duration: 1800,
      day: 3,
      nbParticipants: 5
    },
    {
      id: "61792aa238c64cb6c4a8f7dd",
      startTime: 39600,
      duration: 3600,
      day: 4,
      nbParticipants: 9
    },
    {
      id: "61792aa238c64cb6c4a8f7dd",
      startTime: 39600,
      duration: null,
      day: 4,
      nbParticipants: 9
    }
  ],
  employees: [
    {
        id: "61792aa238c64cb6c4a8f7dd",
        name: "Luna Golden"
      },
      {
        id: "61792aa2b93b7c5762a705fb",
        name: "Holland Clemons"
      },
      {
        id: "61792aa203c836274a19516a",
        name: "Aida Gregory"
      },
      {
        id: "61792aa25ae2665bc03c0827",
        name: "West Vaughan"
      },
      {
        id: "61792aa2b757d0e53ea584de",
        name: "Briggs Foster"
      },
      {
        id: "61792aa2554f8bb0ea07defa",
        name: "Perez Cotton"
      }
  ]
};
