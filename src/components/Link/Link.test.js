import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('<Link />', () => {
  test('renders', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper).toMatchSnapshot();
  });
});
