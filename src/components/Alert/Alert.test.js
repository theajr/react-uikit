import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('<Alert />', () => {
  test('renders', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper).toMatchSnapshot();
  });
});
