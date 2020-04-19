// import React from 'react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import { mount, shallow } from 'enzyme';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import LoginForm from './LoginForm';

// describe('LoginForm tests', () => {
//   const mockStore = configureMockStore([thunk]);

//   test('test', () => {
//     const store = mockStore({
//       startup: { complete: false }
//     });

//     const wrapper = mount(
//       <Provider store={store}>
//         <MemoryRouter>
//           <LoginForm />
//         </MemoryRouter>
//       </Provider>
//     );
//     expect(wrapper.find('h2').text()).toContain('Zaloguj się');
//   });
// });
