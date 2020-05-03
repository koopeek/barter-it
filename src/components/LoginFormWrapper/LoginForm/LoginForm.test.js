import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LoginForm } from './LoginForm';
import ROUTES from '../../../routes/routes';

let wrapper;

const mockStore = configureStore([thunk]);

const authOnStart = {
  auth: {
    loading: false,
    errorMessage: ''
  }
};

const authWithErrorMessage = {
  auth: {
    loading: false,
    errorMessage: 'some error'
  }
};

const authWithLoading = {
  auth: {
    loading: true,
    errorMessage: ''
  }
};

afterAll(() => {
  wrapper.unmount();
});

describe('LoginForm tests', () => {
  it('should have email, password inputs and one submit button', () => {
    const store = mockStore(authOnStart);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTES.ACCOUNT_LOGIN]}>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('input[type="email"]')).toHaveLength(1);
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
    expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
  });

  it('should not have error information on start', () => {
    const store = mockStore(authOnStart);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTES.ACCOUNT_LOGIN]}>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('div.login-form__info--error')).toHaveLength(0);
  });

  it('should have error message section while error is present', () => {
    const store = mockStore(authWithErrorMessage);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTES.ACCOUNT_LOGIN]}>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('div.login-form__info--error')).toHaveLength(1);
  });

  it('submit button should be disabled and have proper className while loading', () => {
    const store = mockStore(authWithLoading);

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTES.ACCOUNT_LOGIN]}>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    const submitButton = wrapper.find('button[type="submit"]');

    submitButton.simulate('click');

    expect(submitButton.prop('disabled')).toBeTruthy();
    expect(submitButton.prop('className')).toEqual('button-disabled');
  });
});
