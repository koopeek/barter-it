import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { NavLink } from './NavLink';

const contentText = 'Content';
const path = '/test';

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <NavLink contentText={contentText} path={path} />
    </MemoryRouter>
  );
});

afterAll(() => {
  wrapper.unmount();
});

describe('NavLink tests', () => {
  it('should mount without crash with proper props', () => {
    expect(wrapper);
  });

  it('anchor tag should have proper href and children props', () => {
    const anchor = wrapper.find('a');

    expect(anchor.prop('href')).toEqual(path);
    expect(anchor.prop('children')).toEqual(contentText);
  });
});
