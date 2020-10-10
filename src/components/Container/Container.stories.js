import { withInfo } from '@storybook/addon-info'
import { radios, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { titleCase } from '../../utils/str'
import Container, { containerSizes } from './Container'

export default {
  title: 'Container',
  decorators: [withKnobs, withInfo({ source: true })]
}

export const Gallery = () => {
  const size = radios(
    'type',
    containerSizes.reduce((acc, i) => ({ ...acc, [titleCase(i)]: i }), {})
  )

  return (
    <Container size={size} className='xxx'>
      {text('Text', 'I am a container')}
    </Container>
  )
}
