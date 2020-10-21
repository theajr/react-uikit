import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import DescriptionList from './Description_List';

export default {
  title: 'DescriptionList',
  decorators: [withKnobs, withInfo({ source: true })]
};

const Description_Data = [
{
  title: 'Description term',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{
  title: 'Description term',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
  title: 'Description term',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
];

export const Gallery = () => {

  return (
    <DescriptionList description={Description_Data} enableDivider={boolean('Divider', false)}/>
  )
};
