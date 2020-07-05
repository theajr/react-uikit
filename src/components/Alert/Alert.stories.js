import React from 'react'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
import Alert, { alertTypes } from './Alert'
import { withInfo } from '@storybook/addon-info'
import { titleCase } from '../../utils/str'

export default {
  title: 'Alert',
  decorators: [withKnobs, withInfo({ source: true })]
}

export const Gallery = () => {
  const closable = boolean('Closable?', false)

  const type = radios(
    'type',
    alertTypes.reduce((acc, i) => ({ ...acc, [titleCase(i)]: i }), {})
  )

  return (
    <Alert closable={closable} type={type}>
      {text('Text', 'Hello, World')}
    </Alert>
  )
}
