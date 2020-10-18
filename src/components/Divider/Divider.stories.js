import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import Divider from './Divider';

export default {
  title: 'Divider',
  decorators: [withKnobs, withInfo({ source: true })]
};

export const Gallery = () => {

  return (
    <Divider withIcon={boolean('With Icon', false)} isSmallSize={boolean('Small Size', false)} isVertical={boolean('Align Vertical', false)}/>
  )
};
