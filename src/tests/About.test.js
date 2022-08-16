import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

test('Testar se Informações da Pokedex estão na tela', () => {
  renderWithRouter(<About />);
  const pokedexScreen = screen.getByText('About Pokédex');
  expect(pokedexScreen).toBeInTheDocument();
});

test('Testar se contem um H2 na Pokedex', () => {
  renderWithRouter(<About />);
  const pokedexTitle = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
  expect(pokedexTitle).toBeInTheDocument();
});

test('Testar se contem dois paragrafros na Pokedex', () => {
  renderWithRouter(<About />);
  const pokedexText = screen.getAllByText(/Pokémons/i);
  expect(pokedexText).toHaveLength(2);
});

test('Testar se contem imagem da Pokedex', () => {
  renderWithRouter(<About />);
  const image = screen.getByAltText('Pokédex');
  expect(image.src)
    .toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
