import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('<Container />', () => {
  test('renders', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });
});
