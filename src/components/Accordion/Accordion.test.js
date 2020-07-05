import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  test('renders', () => {
    const wrapper = shallow(<Accordion />);
    expect(wrapper).toMatchSnapshot();
  });
});
