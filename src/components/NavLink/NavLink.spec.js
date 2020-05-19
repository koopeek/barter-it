import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { NavLink } from './NavLink';

test('should contain proper text and path', () => {
  const contentText = 'Some text';
  const path = '/test';

  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <NavLink contentText={contentText} path={path} />
    </MemoryRouter>
  );

  expect(getByText(contentText)).toBeInTheDocument();
  expect(getByText(contentText).closest('a')).toHaveAttribute('href', path);
});
