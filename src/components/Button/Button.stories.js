import React from 'react'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'
import Button, { btnTypes } from './Button'
import { withInfo } from '@storybook/addon-info'
import { titleCase } from '../../utils/str'

export default {
  title: 'Button',
  decorators: [withKnobs, withInfo({ source: true })]
}

export const Gallery = () => {
  const disabled = boolean('Disabled', false)
  const size = radios('size', {
    Small: 'small',
    Large: 'large'
  })
  const type = radios(
    'type',

    btnTypes.reduce((acc, i) => ({ ...acc, [titleCase(i)]: i }), {}),
    'primary'
  )
  const fullWidth = boolean('fullWidth', false)
  return (
    <Button disabled={disabled} size={size} type={type} fullWidth={fullWidth}>
      {text('Text', 'Hey')}
    </Button>
  )
}
