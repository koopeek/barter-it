import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { ImageThumbnailList } from './ImageThumbnailList';

const handleRemoveFileMock = jest.fn();

afterAll(() => {
  cleanup();
});

test('should not render any thumbnails if files array is empty', () => {
  const filesMock = [];

  const { getByTestId } = render(
    <ImageThumbnailList files={filesMock} handleRemoveFile={handleRemoveFileMock} />
  );

  expect(getByTestId('images-thumbnails').children.length).toBe(0);
});

test('should render proper amount of thumbnails', async () => {
  const filesMock = [
    new File(['fileTestContent'], 'testFile.png', { type: 'image/png' }),
    new File(['fileTestContent'], 'testFile.png', { type: 'image/png' }),
    new File(['fileTestContent'], 'testFile.png', { type: 'image/png' })
  ];

  const { getByTestId } = render(
    <ImageThumbnailList files={filesMock} handleRemoveFile={handleRemoveFileMock} />
  );

  await waitFor(() => {
    expect(getByTestId('images-thumbnails').children.length).toBeGreaterThan(0);
  });

  expect(getByTestId('images-thumbnails').children.length).toBe(3);
});
