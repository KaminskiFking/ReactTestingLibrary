import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Pokemon from '../components/Pokemon';

const DATA_POKEMONS = {
  id: 25,
  name: 'Pikachu',
  type: 'Electric',
  averageWeight: {
    value: '6.0',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Kanto Viridian Forest',
      map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
    },
    {
      location: 'Kanto Power Plant',
      map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
    },
  ],
};

test('Testes da Imagem do Pokemon', () => {
  renderWithRouter(<Pokemon pokemon={ DATA_POKEMONS } isFavorite={ { 25: false } } />);
  const getImage = screen
    .getByAltText('Pikachu sprite');
  const getImageFavorite = screen
    .getByAltText('Pikachu is marked as favorite');
  expect(getImage.alt).toContain('Pikachu sprite');
  expect(getImage.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(getImageFavorite.src).toContain('http://localhost/star-icon.svg');
  expect(getImageFavorite.alt).toContain('Pikachu is marked as favorite');
});

test('Testes de Texto do Pokemon', () => {
  renderWithRouter(<Pokemon pokemon={ DATA_POKEMONS } isFavorite={ { 25: false } } />);
  const getText = screen.getByText('Electric');
  const getLink = screen.getByRole('link', { name: 'More details' });
  expect(getLink.href).toContain('pokemons/25');
  expect(getText).toBeInTheDocument();
});
