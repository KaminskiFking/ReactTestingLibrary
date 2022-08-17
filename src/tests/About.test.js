import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

test('Testar se Informações da Pokedex estão na tela', () => {
  renderWithRouter(<About />);
  const textAbout = screen.getByText('About Pokédex');
  expect(textAbout).toBeInTheDocument();
});

test('Testar se contem um H2 na Pokedex', () => {
  renderWithRouter(<About />);
  const headingAbout = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
  expect(headingAbout).toBeInTheDocument();
});

test('Testar se contem dois paragrafros na Pokedex', () => {
  renderWithRouter(<About />);
  const textPokemons = screen.getAllByText(/Pokémons/i);
  expect(textPokemons).toHaveLength(2);
});

test('Testar se contem imagem da Pokedex', () => {
  renderWithRouter(<About />);
  const imagePokedex = screen.getByAltText('Pokédex');
  expect(imagePokedex.src)
    .toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
