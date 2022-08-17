import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

test('Test if it contains an H2 heading with the text Page requested not found', () => {
  renderWithRouter(<NotFound />);
  const textHeading = screen.getByRole('heading', { level: 2,
    name: /Page requested not found/i });
  expect(textHeading).toBeInTheDocument();
});

test('Test if the SRC contains the right image path', () => {
  renderWithRouter(<NotFound />);
  const imageAltText = screen
    .getByAltText('Pikachu crying because the page requested was not found');
  expect(imageAltText.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
