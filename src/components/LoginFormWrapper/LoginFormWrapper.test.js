import React from 'react';
import { shallow } from 'enzyme';
import { LoginFormWrapper } from './LoginFormWrapper';

let wrapper;

beforeAll(() => {
  wrapper = shallow(<LoginFormWrapper />);
});

describe('LoginFormWrapper tests', () => {
  it('should render properly', () => {
    expect(wrapper);
  });

  it('should have proper className', () => {
    expect(wrapper.find('div').props().className).toEqual('login-form-wrapper');
  });

  it('header should contain proper text', () => {
    expect(wrapper.find('h2').text()).toContain('Zaloguj się');
  });

  it('should have visible LoginForm component inside', () => {
    expect(wrapper.find('LoginForm')).toHaveLength(1);
  });
});
