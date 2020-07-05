import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './Breadcrumb';

describe('<Breadcrumb />', () => {
  test('renders', () => {
    const wrapper = shallow(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
  });
});
