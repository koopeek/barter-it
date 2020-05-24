import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Dropzone } from './Dropzone';

test('dropzone input field should be visible', () => {
  const { container } = render(<Dropzone />);

  expect(container.querySelector('.dropzone')).toBeInTheDocument();

  cleanup();
});
