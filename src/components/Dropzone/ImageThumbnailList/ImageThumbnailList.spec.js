import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { ImageThumbnailList } from './ImageThumbnailList';

const handleRemoveFileMock = jest.fn();

test('should not render any thumbnails if files array is empty', () => {
  const filesMock = [];

  const { getByTestId } = render(
    <ImageThumbnailList files={filesMock} handleRemoveFile={handleRemoveFileMock} />
  );

  expect(getByTestId('images-thumbnails').children.length).toBe(0);
});
//
// test('should render proper amount of thumbnails', async () => {
//   const filesMock = [
//     new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
//     new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
//     new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
//   ];
//
//   const { container, getAllByText, getByText, getByTestId } = render(
//     <ImageThumbnailList files={filesMock} handleRemoveFile={handleRemoveFileMock} />
//   );
//
//   expect(getByTestId('images-thumbnails').children.length).toBe(3);
//
//   await waitForElementToBeRemoved(() => getAllByText(/ladowanie/i));
// });
