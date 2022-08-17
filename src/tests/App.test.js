import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import NotFound from '../pages/NotFound';

test('Testing the Links are on screen', () => {
  renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'About' });
  const pokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(pokemonsLink).toBeInTheDocument();
});

test('Testing Home Redirection', () => {
  const { history } = renderWithRouter(<App />);
  const homeLinkClick = screen.getByRole('link', { name: 'Home' });
  userEvent.click(homeLinkClick);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('Testing About Redirection', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLinkClick = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLinkClick);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Testing Favorites Redirection', () => {
  const { history } = renderWithRouter(<App />);
  const favoriteLinkClick = screen.getByRole('link', { name: 'Favorite Pokémons' });
  userEvent.click(favoriteLinkClick);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('Testing NotFound Redirection', () => {
  const { history } = renderWithRouter(<NotFound />);
  history.push('/que-nao-existe');
  const notFoundText = screen.getByText('Page requested not found');
  expect(notFoundText).toBeInTheDocument();
});
