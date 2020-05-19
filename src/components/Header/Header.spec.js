import React from 'react';
import { MemoryRouter } from 'react-router';
import { cleanup, render } from '@testing-library/react';
import { Header } from './Header';
import ROUTES from '../../global/routes';

const getHeaderComponent = (isAuthPage, isAuthenticated, handleLogout, currentPathname) => {
  return (
    <MemoryRouter initialEntries={['/account/login']}>
      <Header
        isAuthPage={isAuthPage}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        currentPathname={currentPathname}
      />
    </MemoryRouter>
  );
};

afterEach(() => {
  cleanup();
});

test('only logo should be visible on auth page', () => {
  const { container, getByText } = render(
    getHeaderComponent(true, false, jest.fn(), ROUTES.ACCOUNT_LOGIN)
  );
  const navList = container.querySelector('.navigation__list');

  expect(getByText('Barter it')).toBeInTheDocument();
  expect(navList).not.toBeInTheDocument();
});

test('logo and navList should be visible on not auth page', () => {
  const { container, getByText } = render(getHeaderComponent(false, false, jest.fn(), ROUTES.MAIN));
  const navList = container.querySelector('.navigation__list');

  expect(getByText('Barter it')).toBeInTheDocument();
  expect(navList).toBeInTheDocument();
});

test('add new item link should be visible if current page is not new item page', () => {
  const { container } = render(getHeaderComponent(false, true, jest.fn(), ROUTES.MAIN));
  expect(container.querySelector(`[href="${ROUTES.NEW_ITEM}"]`)).toBeInTheDocument();
});

test('add new item link should not be visible on new item page', () => {
  const { container } = render(getHeaderComponent(false, true, jest.fn(), ROUTES.NEW_ITEM));
  expect(container.querySelector(`[href="${ROUTES.NEW_ITEM}"]`)).toBeNull();
});

test('my account link should be visible if current page is not auth page', () => {
  const { getByText } = render(getHeaderComponent(false, true, jest.fn(), ROUTES.MAIN));
  expect(getByText('Moje konto')).toBeInTheDocument();
});

test('logout icon should be visible if user is authenticated', () => {
  const { container } = render(getHeaderComponent(false, true, jest.fn(), ROUTES.MAIN));
  expect(container.querySelector(`[data-icon="sign-out-alt"]`)).toBeInTheDocument();
});

test('logout icon should not be visible if user is not authenticated', () => {
  const { container } = render(getHeaderComponent(false, false, jest.fn(), ROUTES.MAIN));
  expect(container.querySelector(`[data-icon="sign-out-alt"]`)).toBeNull();
});
