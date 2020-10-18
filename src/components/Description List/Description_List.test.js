import React from 'react';
import { shallow } from 'enzyme';
import DescriptionList from './Description_List';

describe('<DescriptionList />', () => {
  test('renders', () => {
    const wrapper = shallow(<DescriptionList />);
    expect(wrapper).toMatchSnapshot();
  });
});
