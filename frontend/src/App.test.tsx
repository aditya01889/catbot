import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders CatBot header', () => {
  render(<App />);
  // Using getByRole with name for better accessibility
  const headerElement = screen.getByRole('heading', { name: /🐱 CatBot/i });
  expect(headerElement).toBeInTheDocument();
});
