import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Testes h2 na tela com textos', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
  const headingPikachu = screen
    .getByRole('heading', { level: 2, name: 'Pikachu Details' });
  const headingSummary = screen
    .getByRole('heading', { level: 2, name: 'Summary' });
  const headingGameLocations = screen
    .getByRole('heading', { level: 2, name: /Game Locations of/i });
  expect(headingGameLocations).toBeInTheDocument();
  expect(headingPikachu).toBeInTheDocument();
  expect(headingSummary).toBeInTheDocument();
});

test('Teste o texto na tela', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/4');
  const textLabel = screen
    .getByLabelText(/Pokémon favoritado/i);
  const textSummary = screen
    .getByText(/The flame on its tail shows the strength of its life force/i);
  expect(textSummary).toBeInTheDocument();
  expect(textLabel).toBeInTheDocument();
});

test('Teste se são exibidas na tela imagens de localização com o src correto', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pokemons/25');
  const getImage = screen
    .getAllByAltText('Pikachu location');
  expect(getImage[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(getImage[1].src).toContain('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});
