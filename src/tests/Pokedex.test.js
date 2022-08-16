import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokedex from '../pages/Pokedex';
import data from '../data';
import renderWithRouter from './renderWithRouter';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons;', () => {
  const DATA_POKEMONS = data;
  renderWithRouter(<Pokedex
    pokemons={ DATA_POKEMONS }
    isPokemonFavoriteById={ { 25: false } }
  />);
  const pokedexHeading = screen
    .getByRole('heading', { level: 2, name: 'Encountered pokémons' });
  expect(pokedexHeading).toBeInTheDocument();
});

test('Testando os botões de filtragem por tipo possuem o nome correto', () => {
  const DATA_POKEMONS = data;
  renderWithRouter(<Pokedex
    pokemons={ DATA_POKEMONS }
    isPokemonFavoriteById={ { 25: false } }
  />);
  const buttonEletric = screen.getByRole('button', { name: 'Electric' });
  const buttonFire = screen.getByRole('button', { name: 'Fire' });
  const buttonBug = screen.getByRole('button', { name: 'Bug' });
  const buttonPoison = screen.getByRole('button', { name: 'Poison' });
  const buttonPsychic = screen.getByRole('button', { name: 'Psychic' });
  const buttonNormal = screen.getByRole('button', { name: 'Normal' });
  const buttonDragon = screen.getByRole('button', { name: 'Dragon' });

  expect(buttonFire).toBeDefined();
  expect(buttonEletric).toBeDefined();
  expect(buttonBug).toBeDefined();
  expect(buttonPoison).toBeDefined();
  expect(buttonPsychic).toBeDefined();
  expect(buttonNormal).toBeDefined();
  expect(buttonDragon).toBeDefined();
});

test('Teste os botao com data-testid', () => {
  const DATA_POKEMONS = data;
  renderWithRouter(<Pokedex
    pokemons={ DATA_POKEMONS }
    isPokemonFavoriteById={ { 25: false } }
  />);

  const buttonId = screen.getAllByTestId('pokemon-type-button');
  const lengthButton = buttonId.length;
  expect(buttonId).toHaveLength(lengthButton);
});

test('Teste se é possivel clicar no botao All', () => {
  const DATA_POKEMONS = data;
  renderWithRouter(<Pokedex
    pokemons={ DATA_POKEMONS }
    isPokemonFavoriteById={ { 25: false } }
  />);

  const buttonAll = screen.getByRole('button', { name: 'All' });
  userEvent.click(buttonAll);
  const pikachu = screen.getByText('Pikachu');
  expect(pikachu).toBeInTheDocument();
});
