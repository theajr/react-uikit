import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import Link, { linkModifiers } from './Link';
import { titleCase } from '../../utils/str';

export default {
  title: 'Link',
  decorators: [withKnobs, withInfo({ source: true })]
};

export const Gallery = () => {
   const modifier = radios(
    'Modifiers',
    linkModifiers.reduce((acc, i) => ({ ...acc, [titleCase(i)]: i }), {}),
    'primary'
  );

  return (
    <Link className='link-class' modifier={modifier} disabled={boolean('Disabled', false)} linkTag={text('Link', '#')} onClick = {actions("clicked-text")}>
      {text('Text', 'I am a Link')}
    </Link>
  )
};
