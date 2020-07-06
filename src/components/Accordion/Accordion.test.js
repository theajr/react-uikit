import React from 'react'
import { shallow } from 'enzyme'
import Accordion from './Accordion'

describe('<Accordion />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Accordion collapsible>
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
    expect(wrapper).toMatchSnapshot()
  })
})
