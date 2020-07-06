import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  test('renders', () => {
    const wrapper = shallow(<Button>Hello</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})
