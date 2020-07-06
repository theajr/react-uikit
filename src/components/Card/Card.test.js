import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('<Card />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Card
        title='Hello'
        type='primary'
        description='Sample text'
        size='small'
        footer={() => 'Foooter'}
      >
        Thanks
      </Card>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
