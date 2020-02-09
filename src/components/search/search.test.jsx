import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchBar from './search.jsx';

describe('SearchBar basics', function() {
  const wrapper = shallow(<SearchBar />);

  it('should render without throwing an error', function() {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should be selectable by class ".search-bar"', function() {
    expect(wrapper.is('.search-bar')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<SearchBar />).find('.search-bar').length).toBe(2);
  });

  it('should should call onChange with input value', function() {
    const event = {
      preventDefault() {},
      target: { value: 'test' },
    };

    wrapper.find('input').simulate('change', event);

    expect(wrapper.state().input).toEqual('test');
  });
});
