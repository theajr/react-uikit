import Badge from './Badge'

// storiesOf('Badge', module).add('Badge', () => <Badge>{99}</Badge>)

import React from 'react'
import {
  withKnobs,
  text,
  boolean,
  radios,
  number
} from '@storybook/addon-knobs'

import { withInfo } from '@storybook/addon-info'

export default {
  title: 'Badge',
  decorators: [withKnobs, withInfo({ source: true })]
}

export const Gallery = () => {
  const children = number('children', 15)
  const overflowCount = number('overflowCount', Infinity)
  return <Badge overflowCount={overflowCount}>{children}</Badge>
}
