import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Tests the h2 on screen with texts', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
  const headingPokemonsDetails = screen
    .getByRole('heading', { level: 2, name: 'Pikachu Details' });
  const headingSummary = screen
    .getByRole('heading', { level: 2, name: 'Summary' });
  const headingGameLocations = screen
    .getByRole('heading', { level: 2, name: /Game Locations of/i });
  expect(headingGameLocations).toBeInTheDocument();
  expect(headingPokemonsDetails).toBeInTheDocument();
  expect(headingSummary).toBeInTheDocument();
});

test('Test label and summary text', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/4');
  const textLabel = screen
    .getByLabelText(/Pokémon favoritado/i);
  const textSummary = screen
    .getByText(/The flame on its tail shows the strength of its life force/i);
  expect(textSummary).toBeInTheDocument();
  expect(textLabel).toBeInTheDocument();
});

test('Test the on-screen displays location images with the correct src', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
  const getImageLocation = screen
    .getAllByAltText('Pikachu location');
  expect(getImageLocation[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(getImageLocation[1].src).toContain('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});
