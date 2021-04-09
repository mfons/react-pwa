import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Sleep App link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TAF Admin/i);
  expect(linkElement).toBeInTheDocument();
});