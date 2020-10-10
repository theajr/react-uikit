import { withInfo } from '@storybook/addon-info'
import { boolean, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  decorators: [withKnobs, withInfo({ source: true })]
}

export const Gallery = () => {
  const hide = boolean('Hide', false)
  const autoPlay = boolean('fullWidth', false)

  const fullWidth = boolean('fullWidth', false)
  return 'jo'
}
