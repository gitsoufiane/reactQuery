import React from 'react';
import { Pokemon,Count ,PokemonSearch} from './components/Pokemon';
import {Posts } from './components/Posts'

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
      <div>
        <Posts />
      </div>
    </div>
  );
}

export default App;
