import React from 'react';
import { mount } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('LoginForm tests', () => {
  it('should mount properly', () => {
    const wrapper = mount(<LoginForm />);
  });
});
