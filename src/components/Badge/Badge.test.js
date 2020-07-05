import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

describe('<Badge />', () => {
  test('renders', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper).toMatchSnapshot();
  });
});
