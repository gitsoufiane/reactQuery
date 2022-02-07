import React from 'react';
import { Pokemon } from './components/Pokemon';
import { Count } from './components/Count';
import { PokemonSearch } from './components/PokemonSearch';

function App() {
  const [pokemonName, setPokemonName] = React.useState('');
  console.log(pokemonName);
  return (
    <div className="container m-auto p-5">
      <PokemonSearch
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
      />
      <Count />
      <div className="">
        <Pokemon pokemonName={pokemonName} />
      </div>
    </div>
  );
}

export default App;
