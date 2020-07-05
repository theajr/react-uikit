import React from 'react'

import Accordion from './Accordion'

import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'

import { withInfo } from '@storybook/addon-info'
import { titleCase } from '../../utils/str'

export default {
  title: 'Accordion',
  decorators: [withKnobs, withInfo({ source: true })]
}

export const Gallery = () => {
  const collapsible = boolean('Collapsible?', true)

  return (
    <Accordion collapsible={collapsible}>
      <Accordion.Item title='Hello' expanded>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        saepe? Nam minus molestias iusto magni natus. Dignissimos quasi
        laboriosam nemo praesentium consequatur nobis labore cum? Velit
        assumenda autem aliquid maxime!
      </Accordion.Item>
      <Accordion.Item title='Bye' expanded>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        saepe? Nam minus molestias iusto magni natus. Dignissimos quasi
        laboriosam nemo praesentium consequatur nobis labore cum? Velit
        assumenda autem aliquid maxime!
      </Accordion.Item>
    </Accordion>
  )
}
