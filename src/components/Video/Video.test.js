import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

describe('<Video />', () => {
  test('renders', () => {
    const wrapper = shallow(<Video />);
    expect(wrapper).toMatchSnapshot();
  });
});
