import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import NotFound from '../pages/NotFound';

test('Testando os Links App.js', () => {
  renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'About' });
  const pokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(pokemonsLink).toBeInTheDocument();
});

test('Testando Redirecionamento do Home App.js', () => {
  const { history } = renderWithRouter(<App />);
  const homeLinkClick = screen.getByRole('link', { name: 'Home' });
  userEvent.click(homeLinkClick);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('Testando Redirecionamento do About App.js', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLinkClick = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLinkClick);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Testando Redirecionamento do Favorites App.js', () => {
  const { history } = renderWithRouter(<App />);
  const favoriteLinkClick = screen.getByRole('link', { name: 'Favorite Pokémons' });
  userEvent.click(favoriteLinkClick);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('Testando Redirecionamento do NotFound App.js', () => {
  const { history } = renderWithRouter(<NotFound />);
  history.push('/que-nao-existe');
  const notFoundPatch = screen.getByText('Page requested not found');
  expect(notFoundPatch).toBeInTheDocument();
});
