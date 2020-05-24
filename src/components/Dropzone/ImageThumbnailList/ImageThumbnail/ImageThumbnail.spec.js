import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react';
import { ImageThumbnail } from './ImageThumbnail';

test('should display image thumbnail', async () => {
  const fileMock = new File(['fileTestContent'], 'testFile.png', { type: 'image/png' });
  const handleRemoveMock = jest.fn();

  const { getByAltText } = render(
    <ImageThumbnail handleRemoveFile={handleRemoveMock} file={fileMock} />
  );

  await waitFor(() => getByAltText('thumbnail'));

  expect(getByAltText('thumbnail')).toBeInTheDocument();

  cleanup();
});
