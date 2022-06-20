import Pokedex from './Pokedex';
import pokemons from './data';
import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <h1>PokeDex</h1>
      <Pokedex pokemons={pokemons} />
    </>
  );
}

export default App;
