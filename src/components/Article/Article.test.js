import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';

describe('<Article />', () => {
  test('renders', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });
});
