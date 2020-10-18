import React from 'react';
import { shallow } from 'enzyme';
import Divider from './Divider';

describe('<Divider />', () => {
  test('renders', () => {
    const wrapper = shallow(<Divider />);
    expect(wrapper).toMatchSnapshot();
  });
});
