import Card, { cardTypes, cardSizes } from './Card'

import React from 'react'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'

import { withInfo } from '@storybook/addon-info'
import { titleCase } from '../../utils/str'

export default {
  title: 'Card',
  decorators: [withKnobs, withInfo({ source: true })]
}

export const Gallery = () => {
  const size = radios(
    'size',
    cardSizes.reduce((acc, i) => ({ ...acc, [titleCase(i)]: i }), {})
  )
  const type = radios(
    'type',

    cardTypes.reduce((acc, i) => ({ ...acc, [titleCase(i)]: i }), {}),
    'primary'
  )
  const title = text('title', 'Card Title')
  const description = text('description', 'Card description')
  const footer = text('footer', 'Card Footer')
  const children = text('children', 'Card content')
  return (
    <Card
      title={title}
      type={type}
      description={description}
      size={size}
      footer={footer}
    >
      {children}
    </Card>
  )
}
