import React from 'react';
import { shallow } from 'enzyme';
import NewItemButton from './NewItemButton';
import ROUTES from '../../../routes/routes';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

let wrapper;

beforeAll(() => {
  wrapper = shallow(<NewItemButton />);
});

describe('NewItemButton tests', () => {
  it('should render without crash', () => {
    expect(wrapper);
  });

  it('button should have proper props', () => {
    const button = wrapper.find('button');

    expect(button.props()).toEqual({
      children: 'Dodaj przedmiot',
      type: 'button',
      onClick: expect.any(Function)
    });
  });

  it('function handleButtonClick should be called after click', () => {
    const button = wrapper.find('button');

    button.simulate('click');

    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.NEW_ITEM);
  });
});
